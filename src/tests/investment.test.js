import request from 'supertest';
import app from '../app.js';
import { describe, it, expect } from '@jest/globals';

describe('Investment API', () => {
    it('should create an investment account', async () => {
        const accountData = {
            clientReference: 'Test Ref',
            name: 'Test Account',
            type: 'GIA',
            currency: 'GBP',
            productId: 'prd-gia',
            owner: 'pty-abc123'
        };

        const response = await request(app)
            .post('/api/investments/open-account')
            .send(accountData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});
