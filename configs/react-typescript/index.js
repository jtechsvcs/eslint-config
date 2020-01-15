const merge = require('@jtechsvcs/eslint-merge-config');
const standard = require('@jtechsvcs/eslint-config-standard');
const typescript = require('@jtechsvcs/eslint-config-typescript/config/overrides.json');
const react = require('@jtechsvcs/eslint-config-react/config/overrides.json');

let mergedConfig = standard;
mergedConfig.overrides = [
    {
        files: [ "*.ts", "*.tsx" ],
        ...merge(react, typescript),
    },
    {
        files: [ "*.jsx" ],
        ...react,
    },
];

module.exports = mergedConfig;