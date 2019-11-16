const overrides = require('@jtechsvcs/eslint-overrides');
const standard = require('./config/standard.json');

standard.overrides = overrides.standard;

module.exports = {
	...standard,
};