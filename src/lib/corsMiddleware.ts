import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize the CORS middleware with allowed methods and origin
const cors = Cors({
  methods: ['GET', 'POST'],
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200,
});

// Define the type for the middleware function
type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: unknown) => void
) => void;

// Helper function to run middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: MiddlewareFunction) {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}

// Middleware function to wrap the handler with CORS
export function corsMiddleware(
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Run the CORS middleware before handling the request
      await runMiddleware(req, res, cors);
      // Proceed to the original handler if CORS passes
      return handler(req, res);
    } catch (error) {
      // Handle errors that occur during the CORS middleware
      res.status(500).json({ error: 'CORS error: ' + (error as Error).message });
    }
  };
}
