jest.mock('../utils/api', () => jest.fn());
jest.mock('extra-log', () => ({ msg: jest.fn() }));

const mergeRequest = require('../mergeRequest');
const api = require('../utils/api');

describe('request', () => {
  beforeEach(() => {
    api.mockReset();
    api.mockImplementation((...params) => [...params]);
  });


  it('list', async () => {
    const response = await mergeRequest.list('projectId');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('list, no params', async () => {
    const response = await mergeRequest.list();

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });


  it('get', async () => {
    const response = await mergeRequest.get('projectId', 'mergeRequestId');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('get, no params', async () => {
    expect(await mergeRequest.get()).toMatchSnapshot();
    expect(await mergeRequest.get('projectId')).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });


  it('notes', async () => {
    const response = await mergeRequest.notes('projectId', 'mergeRequestId');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('notes, no params', async () => {
    expect(await mergeRequest.notes()).toMatchSnapshot();
    expect(await mergeRequest.notes('projectId')).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });


  it('approve', async () => {
    expect(await mergeRequest.approve()).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });


  it('accept', async () => {
    expect(await mergeRequest.approve()).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });


  it('unaprove', async () => {
    expect(await mergeRequest.approve()).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });
});
