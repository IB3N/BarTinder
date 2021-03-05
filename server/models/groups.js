const { Sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      default: Sequelize.NOW,
    },
  });

  Group.associate = (model) => {
    // Groups have many users, through members
  };

  return Group;
};
