### Gitlab JS interface

[![CircleCI](https://circleci.com/gh/rumax/gitlab-js.svg?style=shield)](https://circleci.com/gh/rumax/gitlab-js)
[![codecov](https://codecov.io/gh/rumax/gitlab-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rumax/gitlab-js)
[![npm version](https://badge.fury.io/js/gitlab-js.svg)](https://badge.fury.io/js/gitlab-js)

JS implementation for [gitlab API](https://docs.gitlab.com/ee/api/README.html).

Current implementation includes basic functionality, including:

- [Get all projects](https://docs.gitlab.com/ee/api/projects.html#list-all-projects)
- [List user projects ](https://docs.gitlab.com/ee/api/projects.html#list-user-projects)
- [List project merge requests](https://docs.gitlab.com/ee/api/merge_requests.html#list-project-merge-requests)
- [Get single MR](https://docs.gitlab.com/ee/api/merge_requests.html#get-single-mr)
- [Comments on merge requests](https://docs.gitlab.com/ee/api/merge_requests.html#comments-on-merge-requests)

#### TODO:
- test coverage. Depends on https://github.com/facebook/jest/issues/5082
- Other gitlab api
- Implementation for web

### Node cli implementation:
- `node cli.js` to get help and list of supported commands
- `node gitlab_cli.js project all` to get all projects
- `node gitlab_cli.js mergeRequest list $projectId` to list project merge requests
- etc.
