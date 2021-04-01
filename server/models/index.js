'use strict';

require('dotenv').config();
const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = process.env;
const Sequelize = require('sequelize');
const { associations } = require('./associations');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: true,
  benchmark: true,
  logQueryParameters: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // operatorsAliases: false // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

const modelDefiners = [
  require('./users'),
  require('./groups'),
  require('./likes'),
];

// Define all models
modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize, DataTypes));

// Once all models are defined, execute associations
associations(sequelize);

module.exports = sequelize;
