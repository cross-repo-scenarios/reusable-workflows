const core = require('@actions/core');

const name = core.getInput('username');

core.notice(`Hello ${name}! I'm a local action.`);
