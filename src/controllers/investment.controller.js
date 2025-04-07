import { openAccount } from '../services/investment.service.js';
import memoryStore from '../data/store.js';

export const createInvestmentAccount = async (req, res) => {
  try {
    const data = await openAccount(req.body);
    console.log('Account created:', data);
    // Check if the account creation was successful
    if (!data || !data.id) {
      return res.status(400).json({ message: 'Account creation failed', data });
    }
    // Check if the response contains an account ID
    if (!data.id) {
      return res.status(400).json({ message: 'Account ID not found in response' });
    }
    // Log the successful account creation
    console.log('Account created successfully:', data);
    // Save in memory
    memoryStore.accounts.push(data);

    res.status(201).json(data);
  } catch (err) {
    console.error('Error creating account:', err);
    res.status(500).json({ message: 'Error creating account', error: err.message });
  }
};

// Mock data store for demonstration purposes
export const getAccountById = (req, res) => {
  const { id } = req.params;
  const account = memoryStore.accounts.find(acc => acc.id === id);
  if (!account) {
    return res.status(404).json({ error: 'Account not found' });
  }
  res.json(account);
};

// Mock data store for demonstration purposes
export const getAllAccounts = (req, res) => {
  res.json(memoryStore.accounts);
};
