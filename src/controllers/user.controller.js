import User from '../model/user.model.js';
import memoryStore from '../data/store.js';
import { encryptData, decryptData } from '../utils/crypto.util.js';

export const createUserProfile = (req, res) => {
  const { clientReference, name, owner } = req.body;
  if (!clientReference || !name || !owner) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newUser = new User({ clientReference, name, owner });
  const encrypted = encryptData(newUser);
  memoryStore.users.push({ id: newUser.id, data: encrypted });

  res.status(201).json({ message: 'User created and encrypted', id: newUser.id });
};

export const getAllUsers = (req, res) => {
  const decryptedUsers = memoryStore.users.map(entry => {
    return decryptData(entry.data);
  });
  res.json(decryptedUsers);
};
