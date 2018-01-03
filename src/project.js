const { msg } = require('extra-log');

const api = require('./utils/api');

const defaultOpts = { simple: true };

module.exports = {

  async all(opts = {}) {
    const path = '/projects';
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },


  async search(search, opts = {}) {
    if (!search) {
      msg('search criteria is required');
      return undefined;
    }
    const path = '/projects';
    return api(path, {
      ...defaultOpts,
      ...opts,
      search,
    });
  },


  async owned(userId, opts = {}) {
    if (!userId) {
      msg('userId is required to get owned projects');
      return undefined;
    }
    const path = `/users/${userId}/projects`;
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },
};
