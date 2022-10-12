module.exports = {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    routes: {
        cors: {
            origin: ['*'] // an array of origins or 'ignore'
        }
    }
}
