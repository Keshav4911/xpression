import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
  methods: ['GET', 'POST'],
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200,
})

export function corsMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise((resolve, reject) => {
      cors(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(handler(req, res))
      })
    })
  }
}