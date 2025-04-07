import dotenv from 'dotenv';
dotenv.config();

const config = {
  wealthKernelBaseUrl: process.env.WK_API_BASE_URL,
  apiVersion: process.env.WK_API_VERSION,
  environment: process.env.NODE_ENV || 'development',
  wealthKernelMockServerUrl: process.env.WK_MOCK_SERVER_URL,
  encryptionKey : process.env.ENCRYPTION_KEY,
  jwtSecret: process.env.JWT_SECRET,
};
export default config;
