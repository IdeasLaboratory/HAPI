// TODO : move conf value inside dotenv file
module.exports = {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
