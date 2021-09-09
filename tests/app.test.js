const request = require('supertest');
const { app } = require('../src/app');

describe('register', () => {
  it('returns status code 201', async () => {
    const response = await request(app).get('/');
    console.log(response.body);
    expect(response.body.alive).toEqual(true);
  });
});
