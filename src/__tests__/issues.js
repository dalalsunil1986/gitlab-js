jest.mock('../utils/api', () => jest.fn());
jest.mock('extra-log', () => ({ msg: jest.fn() }));

const issues = require('../issues');
const api = require('../utils/api');

describe('issues', () => {
  beforeEach(() => {
    api.mockReset();
    api.mockImplementation((...params) => [...params]);
  });


  it('list', async () => {
    const responseUndefined = await issues.list();
    expect(responseUndefined).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(0);

    const response = await issues.list('projectId');
    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('report', async () => {
    const responseUndefined = await issues.list();
    expect(responseUndefined).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(0);

    const response = await issues.report('projectId', {
      title: 'title',
      description: 'description',
    });

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('delete', async () => {
    const responseUndefined = await issues.delete();
    expect(responseUndefined).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(0);

    const response = await issues.delete('projectId', 'issueId');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('addComment', async () => {
    const responseUndefined = await issues.delete();
    expect(responseUndefined).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(0);

    const responseUndefined2 = await issues.delete('projectId');
    expect(responseUndefined2).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(0);

    const response = await issues.addComment('projectId', 'issueId', 'addComment');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });
});
