'use strict';

require('dotenv').config();
const { DB_CONNECTION_URL, DB_DIALECT, DB_PROTOCOL } = process.env;
const Sequelize = require('sequelize');
const { associations } = require('./associations');

const sequelize = new Sequelize(DB_CONNECTION_URL, {
  dialect: DB_DIALECT,
  protocol: DB_PROTOCOL,
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
modelDefiners.forEach((modelDefiner) =>
  modelDefiner(sequelize, Sequelize.DataTypes),
);

// Once all models are defined, execute associations
associations(sequelize);

module.exports = sequelize;
