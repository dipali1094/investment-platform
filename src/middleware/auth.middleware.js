import jwt from 'jsonwebtoken';
import config from '../../config/env.config.js';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Expecting 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
