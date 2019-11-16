const overrides = require('@jtechsvcs/eslint-overrides');
const merge = require('@jtechsvcs/eslint-merge-config');
const standard = require('@jtechsvcs/eslint-config-standard');
const typescript = require('./config/typescript.json');

let mergedConfig = merge(typescript, standard);
mergedConfig.overrides = overrides.typescript;

module.exports = {
	...mergedConfig,
};