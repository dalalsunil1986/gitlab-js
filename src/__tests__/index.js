const gitlab = require('../');

describe('request', () => {
  it('available methods', async () => {
    expect(gitlab).toMatchSnapshot();
  });
});
