'use strict';

// TODO : Add a script in package.json to build db easily, but think how to do in production
// TODO : Add a cors system ?
// TODO : sequelize dev dependencies ? + db migration strategy ?

require('dotenv').config()

const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const Swagger = require('./config/swagger')
const ServerConfig = require('./config/server')
const AuthConfig = require('./config/auth')

const mongoose = require('mongoose');
const Routes = require('./routers');

const start = async () => {

    const server = Hapi.server(ServerConfig);

    await server.register([
        Jwt,
        Inert,
        Vision,
        Swagger
    ]);

    server.auth.strategy('jwt', 'jwt', AuthConfig);

    server.route(Routes);

    await server.start();

    // TODO: Move db connection in another file
    mongoose.connect(process.env.DB_CHANNEL, {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log("Connected to Mongoose"));

    console.log('Server running at: ' + server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start().then(() => {

});
