import express from 'express';
import { createInvestmentAccount, getAccountById, getAllAccounts } from '../controllers/investment.controller.js';

const router = express.Router();

router.post('/accounts', createInvestmentAccount);
router.get('/accounts/:id', getAccountById);
router.get('/accounts', getAllAccounts);

export default router;
