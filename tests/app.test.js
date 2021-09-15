/* global describe, it, expect, afterAll */
const request = require('supertest');
const db = require('mongoose');
const { app } = require('../src/app');

describe('basic check', () => {
  it('returns status code 201', async () => {
    const response = await request(app).get('/');
    expect(response.body.alive).toEqual(true);
  });

  afterAll(() => {
    db.connection.close();
  });
});
