import jwt from 'jsonwebtoken';
import config from '../../config/env.config.js';

export const login = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const payload = {
    name,
    loginDate: new Date().toISOString()
  };

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });

  res.status(200).json({ token });
};
