const merge = require('@jtechsvcs/eslint-merge-config');
const standard = require('@jtechsvcs/eslint-config-standard');
const typescript = require('@jtechsvcs/eslint-config-typescript/config/overrides.json');
const vue = require('@jtechsvcs/eslint-config-vue/config/overrides.json');

let mergedConfig = standard;
mergedConfig.overrides = [
    {
        files: [ "*.ts", "*.vue" ],
        ...merge(vue, typescript),
    },
];

module.exports = mergedConfig;