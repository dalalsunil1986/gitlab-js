const https = require('https');
const {
  error,
  info,
  msg,
} = require('extra-log');

const request = opts => new Promise((resolve, reject) => {
  const req = https.request(opts, (res) => {
    res.setEncoding('utf8');
    const { headers, statusCode } = res;
    info('statusCode:', statusCode);

    if (statusCode > 300 && statusCode < 400 && headers.location) {
      msg('Redirect detected');
      const redirectUrl = headers.location;
      info('redirectUrl', redirectUrl);
      // TODO: handle
    } else {
      const data = [];
      res.on('data', (chunk) => {
        data.push(chunk);
      }).on('end', () => {
        resolve(JSON.parse(data.join(''), 0, 2));
      });
    }
  });

  req.on('error', (e) => {
    error(e);
    reject(e);
  });

  req.end();
});

module.exports = request;
