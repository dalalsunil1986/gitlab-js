const { msg } = require('extra-log');

const api = require('./utils/api');

const defaultOpts = { simple: true };

module.exports = {

  async list(projectId, opts = {}) {
    if (!projectId) {
      msg('projectId has to be provided to get merge requests');
      return undefined;
    }
    const path = `/projects/${projectId}/merge_requests`;
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },


  async get(projectId, mergeRequestId, opts = {}) {
    if (!projectId) {
      msg('projectId has to be provided to get merge requests');
      return undefined;
    }
    if (!mergeRequestId) {
      msg('mergeRequestId has to be provided to get merge request');
      return undefined;
    }
    const path = `/projects/${projectId}/merge_requests/${mergeRequestId}`;
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },


  async notes(projectId, mergeRequestId, opts = {}) {
    if (!projectId) {
      msg('projectId has to be provided to get merge requests');
      return undefined;
    }
    if (!mergeRequestId) {
      msg('mergeRequestId has to be provided to get merge request notes');
      return undefined;
    }
    const path = `/projects/${projectId}/merge_requests/${mergeRequestId}/notes`;
    return api(path, {
      ...defaultOpts,
      ...opts,
    });
  },


  async approve() {
    // TODO: implement
  },


  async accept() {
    // TODO: implement
  },


  async unaprove() {
    // TODO: implement
  },

};
