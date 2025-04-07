import request from 'supertest';
import app from '../app.js';
import { describe, it, expect } from '@jest/globals';

describe('User API', () => {
    it('should create a user and return token', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe', email: 'john@example.com' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
    });
});
