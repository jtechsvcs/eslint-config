const overrides = require('@jtechsvcs/eslint-overrides');
const merge = require('@jtechsvcs/eslint-merge-config');
const standard = require('@jtechsvcs/eslint-config-standard');
const vue = require('./config/vue.json');

let mergedConfig = merge(vue, standard);
mergedConfig.overrides = overrides.vue;

module.exports = {
	...mergedConfig,
};