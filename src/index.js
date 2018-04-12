const issues = require('./issues');
const mergeRequest = require('./mergeRequest');
const project = require('./project');
const config = require('./config');

module.exports = {
  issues,
  mergeRequest,
  project,
  config: {
    setHostname: (hostname) => {
      config.hostname = hostname;
    },
    setPort: (port) => {
      config.port = port;
    },
    setPrivateToken: (privateToken) => {
      config.privateToken = privateToken;
    },
    setUserId: (userId) => {
      config.userId = userId;
    },
  },
};
