jest.mock('https', () => ({ request: jest.fn() }));
jest.mock('extra-log', () => ({
  error: jest.fn(),
  info: jest.fn(),
  msg: jest.fn(),
}));

const https = require('https');
// const request = require('../request');

describe('request', () => {
  beforeEach(() => {
    https.request.mockReset();
  });

  it('resolve OK', async () => {
    // TODO: impelemnt
  });

  it('reject', () => {
    // TODO: impelemnt
  });

  it('redirect', () => {
    // TODO: impelemnt
  });
});
