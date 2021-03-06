const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      default: Sequelize.NOW,
    },
  });

  Group.associate = (model) => {
    Group.belongsToMany(model.user, { through: model.member });
  };

  return Group;
};
