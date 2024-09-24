import { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.API_KEY || 'your-secret-api-key'

export function authMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const apiKey = req.headers['x-api-key']

    if (apiKey !== API_KEY) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    return handler(req, res)
  }
}