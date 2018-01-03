const {
  error,
  info,
  msg,
} = require('extra-log');

const gitlab = require('./src/');

const [
  // eslint-disable-next-line no-unused-vars
  cmd,
  // eslint-disable-next-line no-unused-vars
  script,
  command,
  action,
  ...args
] = process.argv;

if (!command) {
  msg(`Command has to be provided. Example:
    - node gitlab_cli.js project
    - node gitlab_cli.js mergeRequest`);
  process.exit(1);
}

if (!gitlab[command]) {
  msg(`Unknown command ${command}. Supported:
    - node gitlab_cli.js project
    - node gitlab_cli.js mergeRequest`);
  process.exit(1);
}

if (!action && command === 'project') {
  msg(`Action has to be provided. Supported:
    - node gitlab_cli.js project all
    - node gitlab_cli.js project search $searchCriteria
    - node gitlab_cli.js project owned $userId`);
  process.exit(1);
}

if (!action && command === 'mergeRequest') {
  msg(`Action has to be provided. Supported:
    - node gitlab_cli.js mergeRequest list $projectId
    - node gitlab_cli.js mergeRequest get $projectId $mergeRequestId
    - node gitlab_cli.js mergeRequest notes $projectId $mergeRequestId`);
  process.exit(1);
}

(async () => {
  info(`==> Executing ${command}`);
  try {
    const response = await gitlab[command][action](...args);
    info('Full response', JSON.stringify(response, null, 2));
  } catch (err) {
    error(err);
  }
  info(`==> Executed ${command}`);
})();
