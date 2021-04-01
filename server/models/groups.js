const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, DATE } = DataTypes;
  return sequelize.define('group', {
    name: {
      type: STRING,
      allowNull: false,
    },
    date: {
      type: DATE,
      allowNull: true,
      default: Sequelize.NOW,
    },
  });
};
