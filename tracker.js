const { Octokit } = require("@octokit/rest");

module.exports = class Tracker {
  constructor(context, config) {
    this.context = context;
    this.config = config;
  }

  get hasMobileLabel() {
  	const label = this.context.payload.label;
    return this.context.payload.issue.labels.find(label => label.name.match('Mobile')) != undefined
  }
}