const standard = require('@jtechsvcs/eslint-config-standard');

let mergedConfig = {
    ...standard,
    overrides: [
        {
            files: [ "*.jsx" ],
            ...require('./config/overrides.json'),
        },
    ],
};

module.exports = mergedConfig;