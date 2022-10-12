const HapiSwagger = require('hapi-swagger');

const swaggerOptions = {
    info: {
        title: 'API Documentation',
        // TODO: manage version
        // version: Pack.version,
    },
};

module.exports = {
    plugin: HapiSwagger,
    options: swaggerOptions
}