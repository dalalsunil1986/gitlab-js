jest.mock('../../config', () => ({
  privateToken: 'privateToken',
  userId: 'userId',
  apiVersion: '/api/v4',
  hostname: 'gitlab.com',
  port: 443,
}));

jest.mock('../request', () => jest.fn());

const api = require('../api');
const request = require('../request');


describe('api', () => {
  beforeEach(() => {
    request.mockReset();
    request.mockImplementation((...params) => [...params]);
  });


  it('Call api with url param only', async () => {
    const url = '/projects';

    const response = api(url);

    expect(request.mock.calls).toMatchSnapshot();
    expect(response).toMatchSnapshot();
  });


  it('Call api with url and params', async () => {
    const url = '/projects';
    const params = { state: 'opened' };

    const response = api(url, params);

    expect(request.mock.calls).toMatchSnapshot();
    expect(response).toMatchSnapshot();
  });


  it('Call api with url, params and opts', async () => {
    const url = '/projects';
    const params = { state: 'opened', order_by: 'order by' };
    const opts = { anotherOption: 'another option' };

    const response = api(url, params, opts);

    expect(request.mock.calls).toMatchSnapshot();
    expect(response).toMatchSnapshot();
  });


  it('POST', async () => {
    const url = '/projects';
    const params = { state: 'opened' };
    const opts = { method: 'POST' };

    const response = api(url, params, opts);

    expect(request.mock.calls).toMatchSnapshot();
    expect(response).toMatchSnapshot();
  });


  it('Throws an exception', () => {
    const url = '/projects';
    let error;
    request.mockReset();
    request.mockImplementation(() => {
      throw new Error('Api error');
    });

    try {
      api(url);
    } catch (err) {
      error = err;
    }

    expect(error).toMatchSnapshot();
  });
});
