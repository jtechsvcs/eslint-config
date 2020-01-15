const standard = require('@jtechsvcs/eslint-config-standard');

let mergedConfig = {
    ...standard,
    overrides: [
        {
            files: [ "*.ts" ],
            ...require('./config/overrides.json'),
        },
    ],
};

module.exports = mergedConfig;