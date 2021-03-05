const { Sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('like', {
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: Sequelize.NOW,
    },
    liked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Like.associate = (model) => {
    // Likes have many users
    // Likes have many drink id's
  };

  return Like;
};
