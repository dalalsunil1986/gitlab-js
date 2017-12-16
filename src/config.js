module.exports = {
  privateToken: process.env.GITLAB_TOKEN,
  userId: process.env.GITLAB_USER,
  apiVersion: '/api/v4',
  hostname: 'gitlab.com',
  port: 443,
};
