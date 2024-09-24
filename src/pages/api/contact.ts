import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const { name, email, message } = req.body;

    // Perform server-side validation or processing with form data
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Log the received data or use it for database operations, notifications, etc.
    console.log(`Received contact form submission from ${name} (${email}): ${message}`);

    // Simulate an async operation, like saving to a database
    setTimeout(() => {
      res.status(200).json({ message: 'Form submitted successfully' });
    }, 1000);
  } else {
    // Respond with 405 if the method is not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
