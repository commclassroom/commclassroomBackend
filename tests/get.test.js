import request from 'supertest';
import app from '../src/app';

describe('POST /users', () => {
  describe('given a username and password', () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      console.log(response);
      expect(response.alive).toBe(true);
    })

  })

})