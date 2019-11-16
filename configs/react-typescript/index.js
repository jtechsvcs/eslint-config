const overrides = require('@jtechsvcs/eslint-overrides');
const merge = require('@jtechsvcs/eslint-merge-config');
const typescript = require('@jtechsvcs/eslint-config-typescript');
const react = require('@jtechsvcs/eslint-config-react');
const reactTypescript = require('./config/reactTypescript.json');

let mergedConfig = merge(merge(reactTypescript, react), typescript);
mergedConfig.overrides = overrides.reactTypescript;

module.exports = {
	...mergedConfig,
};