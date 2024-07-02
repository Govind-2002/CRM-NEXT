import { customers } from '../../data/customers';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(customers);
  } else if (req.method === 'POST') {
    const customer = req.body;
    customers.push(customer);
    res.status(201).json(customer);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
