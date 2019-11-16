const overrides = require('@jtechsvcs/eslint-overrides');
const merge = require('@jtechsvcs/eslint-merge-config');
const standard = require('@jtechsvcs/eslint-config-standard');
const react = require('./config/react.json');

let mergedConfig = merge(react, standard);
mergedConfig.overrides = overrides.react;

module.exports = {
	...mergedConfig,
};