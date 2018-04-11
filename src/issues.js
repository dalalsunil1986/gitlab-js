const { msg } = require('extra-log');

const api = require('./utils/api');

const defaultOpts = { simple: true };

module.exports = {

  async list(projectId, opts = {}) {
    if (!projectId) {
      msg('projectId has to be provided to get issues');
      return undefined;
    }
    const path = `/projects/${projectId}/issues`;
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },

  async report(projectId, issue) {
    if (!projectId) {
      msg('projectId has to be provided to get issues');
      return undefined;
    }
    const path = `/projects/${projectId}/issues`;
    return api(
      path, {
        id: projectId,
        ...issue,
      },
      { method: 'POST' },
    );
  },

  async delete(projectId, issueId) {
    if (!projectId) {
      msg('projectId has to be provided to delete issue');
      return undefined;
    }
    if (!issueId) {
      msg('issueId has to be provided to delete issue');
      return undefined;
    }
    const path = `/projects/${projectId}/issues/${issueId}`;
    return api(
      path, {},
      { method: 'DELETE' },
    );
  },

  async addComment(projectId, issueId, comment) {
    if (!projectId) {
      msg('projectId has to be provided to add comment');
      return undefined;
    }
    if (!issueId) {
      msg('issueId has to be provided to add comment');
      return undefined;
    }
    const path = `/projects/${projectId}/issues/${issueId}/notes`;
    return api(
      path,
      { body: comment },
      { method: 'POST' },
    );
  },
};
