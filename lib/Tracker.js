const { Octokit } = require("@octokit/rest");

module.exports = class Tracker {
  constructor(context, config) {
    this.context = context;
    this.config = config;
  }

  get hasMobileLabel() {
    const label = this.context.payload.label;
    return this.context.payload.issue.labels.find(label => label.name.match('mobile')) != undefined
  }

  get hasCommit() {
    return false; //placeholder
  }

  get isTitleCorrect() {
    let pattern = /mobile[:-]/i;
    return pattern.test(this.context.payload.issue.title); //placeholder
  }

  get ValidMobileIssue() {
    return hasMobileLabel && hasCommit && isTitleCorrect; 
  }
}
