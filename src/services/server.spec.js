const request = require('supertest');
const server = require('./server');

describe('Server', () => {
  it('should return Hello, world! on / GET', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!\n');
  });
});
