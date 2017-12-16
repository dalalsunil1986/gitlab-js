const { msg } = require('extra-log');

const api = require('./utils/api');

module.exports = {

  async all() {
    const path = '/projects';
    return api(path);
  },


  async owned(userId) {
    if (!userId) {
      msg('userId is required to get owned projects');
      return undefined;
    }
    const path = `/users/${userId}/projects`;
    return api(path);
  },
};
