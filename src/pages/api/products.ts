import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '@/lib/data'
import { authMiddleware } from '@/lib/authMiddleware'
import { corsMiddleware } from '@/lib/corsMiddleware'

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const paginatedProducts = products.slice(startIndex, endIndex)

    res.status(200).json({
      products: paginatedProducts,
      currentPage: page,
      totalPages: Math.ceil(products.length / limit),
    })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default corsMiddleware(authMiddleware(handler))