const { msg } = require('extra-log');

const api = require('./utils/api');

module.exports = {

  async all() {
    const path = '/projects';
    return api(path, { simple: true });
  },


  async search(search) {
    if (!search) {
      msg('search criteria is required');
      return undefined;
    }
    const path = '/projects';
    return api(path, { search, simple: true });
  },


  async owned(userId) {
    if (!userId) {
      msg('userId is required to get owned projects');
      return undefined;
    }
    const path = `/users/${userId}/projects`;
    return api(path, { simple: true });
  },
};
