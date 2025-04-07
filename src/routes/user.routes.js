import express from 'express';
import { createUserProfile, getAllUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();
router.post('/users', verifyToken, createUserProfile);
router.get('/users', getAllUsers);

export default router;
