const standard = require('@jtechsvcs/eslint-config-standard');

let mergedConfig = {
    ...standard,
    overrides: [
        {
            files: [ "*.vue" ],
            ...require('./config/overrides.json'),
        },
    ],
};

module.exports = mergedConfig;