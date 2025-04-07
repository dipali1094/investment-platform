// New (ES Module)
import config from '../../config/env.config.js';
import { v4 as uuidv4 } from 'uuid';

// Utility to build WealthKernel API headers
export const getHeaders = () => ({
    'Accept': 'application/json',
    'Accept-Version': config.apiVersion,
    'Content-Type': 'application/json',
    'Idempotency-Key': uuidv4(), // Important for retry safety
  });
  
// Simple retry logic with exponential backoff
export async function retryRequest(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      const isLast = i === retries - 1;
      if (isLast) throw err;
      console.warn(`Retrying request (${i + 1}/${retries})...`);
      await new Promise(res => setTimeout(res, delay * (i + 1)));
    }
  }
}
