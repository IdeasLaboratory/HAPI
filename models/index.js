const Sequelize = require('sequelize');
const dbConf = require('../config/db');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, dbConf);

const orm = {};

// Export all classes
orm.Sequelize = Sequelize;
orm.db = db;

module.exports = orm;