jest.mock('../utils/api', () => jest.fn());
jest.mock('extra-log', () => ({ msg: jest.fn() }));

const project = require('../project');
const api = require('../utils/api');

describe('request', () => {
  beforeEach(() => {
    api.mockReset();
    api.mockImplementation((...params) => [...params]);
  });


  it('all', async () => {
    const response = await project.all();

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('all with opts', async () => {
    const response = await project.all({ simple: false, owned: true });

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('owned', async () => {
    const response = await project.owned('userId');

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls).toMatchSnapshot();
  });


  it('owned, no params', async () => {
    const response = await project.owned();

    expect(response).toMatchSnapshot();
    expect(api).toHaveBeenCalledTimes(0);
  });
});
