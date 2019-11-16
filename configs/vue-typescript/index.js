const overrides = require('@jtechsvcs/eslint-overrides');
const merge = require('@jtechsvcs/eslint-merge-config');
const typescript = require('@jtechsvcs/eslint-config-typescript');
const vue = require('@jtechsvcs/eslint-config-vue');
const mergeVue = require('./config/vueTypescript.json');

let mergedConfig = merge(merge(mergeVue, vue), typescript);
mergedConfig.overrides = overrides.vueTypescript;

module.exports = {
	...mergedConfig,
};