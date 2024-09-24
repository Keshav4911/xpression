import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Here you would typically save the contact form data to a database
    // and potentially send an email notification
    const { name, email, message } = req.body

    // Simulating an async operation
    setTimeout(() => {
      res.status(200).json({ message: 'Form submitted successfully' })
    }, 1000)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}