/* eslint-disable no-undef */
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.ENCRYPTION_KEY || 'defaultSecretKey';

export const encryptData = (data) => {
  const stringified = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringified, secretKey).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};