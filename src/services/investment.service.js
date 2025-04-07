import axios from 'axios';
import config from '../../config/env.config.js'; // Import the config file
import { getHeaders } from '../utils/api.utils.js';

// WealthKernel base URL
const url = `${config.wealthKernelMockServerUrl}/accounts`;
/**
 * Opens a new investment account using WealthKernel's API.
 * @param {Object} accountData - The data payload for the account creation.
 * @returns {Object} - The response data from WealthKernel API.
 */
export const openAccount = async (accountData) => {
    try {
        const headers = getHeaders(); // pulls dynamic headers including API version, content type, and optional idempotency key
      
        const options = {
            method: 'POST',
            url,
            headers,
            data: accountData
          };

        const response = await axios.request(options);
        console.log('WealthKernel API Response:', response);

        // Check if the response is successful
        if (!response || !response) {
            throw new Error('No response from WealthKernel API');
        }
        // Check if the account creation was successful
        if (response.status !== 200) {
            throw new Error(`Account creation failed: ${response.statusText}`);
        }
        // Check if the response contains an account ID
        if (!response.data.id) {
            throw new Error('Account ID not found in response');
        }
        // Log the successful account creation
        console.log('Account created successfully:', response.data);

        // Optionally include retry logic:
        // const response = await retryRequest(() =>
        //   axios.post(url, accountData, { headers })
        // );
        return response.data;
    } catch (err) {
        // Handle errors from WealthKernel API
        console.error('WealthKernel API Error:', err.response?.data || err.message);
        throw err;
    }
};
