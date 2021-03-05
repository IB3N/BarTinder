module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('like', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    liked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Like.associate = (model) => {
    // Likes have many users
    Like.belongsTo(model.user);
  };

  return Like;
};
