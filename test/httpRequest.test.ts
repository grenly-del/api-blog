import {describe, expect, test} from '@jest/globals';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../server'
describe('Http Request', () => {
    const request = supertest(app)
    test('GET /api/users',async () => {
        const res = await request.get('/api/users')
        console.log(res.body)
        expect(res.body).toBeDefined()
    })
    test('POST /api/users/register', async () => {
        const res = await request.post('/api/users/register')
        .set('Content-Type', 'application/json')
        .send({
            firstname: 'Grantly',
            lastname: 'Sorongan',
            username: 'Snake Eyes',
            password: 'Miranda'
        })

        console.log(res.body)
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
        return 0
    })
    test('POST /api/users/login', async () => {
        const res = await request.post('/api/users/login')
        .set('Content-Type', 'application/json')
        .send({
            username: 'Snake',
            password: 'miranda'
        })
        console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        
    })
    afterAll(() => {
        mongoose.connection.close()
    })
})