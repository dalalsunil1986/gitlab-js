### Gitlab JS interface

[![CircleCI](https://circleci.com/gh/rumax/gitlab-js.svg?style=shield)](https://circleci.com/gh/rumax/gitlab-js)
[![codecov](https://codecov.io/gh/rumax/gitlab-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rumax/gitlab-js)
[![npm version](https://badge.fury.io/js/gitlab-js.svg)](https://badge.fury.io/js/gitlab-js)

JS implementation for [gitlab API](https://docs.gitlab.com/ee/api/README.html).

Current implementation includes basic functionality, including:

- [Issues](https://docs.gitlab.com/ee/api/issues.html)
- [Get all projects](https://docs.gitlab.com/ee/api/projects.html#list-all-projects)
- [List user projects ](https://docs.gitlab.com/ee/api/projects.html#list-user-projects)
- [List project merge requests](https://docs.gitlab.com/ee/api/merge_requests.html#list-project-merge-requests)
- [Get single MR](https://docs.gitlab.com/ee/api/merge_requests.html#get-single-mr)
- [Comments on merge requests](https://docs.gitlab.com/ee/api/merge_requests.html#comments-on-merge-requests)

#### TODO:
- Other gitlab api
- Implementation for web

### JavaScript implementation

```
const gitlab = require('gitlab-js');

const projectId = 1;

const getIssues = async (title) => {
  const issues = await issues.list(projectId, { search: title });

  if (issues.length > 0) {
    console.log('Issues found', issues);
  }
}

getIssues();
```

### Node cli implementation:
- `./cli.js` to get help and list of supported commands
- `./cli.js project all` to get all projects
- `./cli.js mergeRequest list $projectId` to list project merge requests
- etc.
