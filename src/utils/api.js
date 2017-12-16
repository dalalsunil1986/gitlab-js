const config = require('../config');

const request = require('./request');

// TODO: use better solution
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const defaultOpts = { method: 'GET' };

module.exports = (url, params = {}, opts = {}) => {
  const queryParams = {
    ...params,
    private_token: config.privateToken,
  };

  const query = Object.keys(queryParams).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`);

  return request({
    ...defaultOpts,
    ...opts,
    hostname: config.hostname,
    path: `${config.apiVersion}${url}?${query.join('&')}`,
    port: config.port,
  });
};
