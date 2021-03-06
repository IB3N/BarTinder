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
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Like.associate = (model) => {
    Like.belongsTo(model.user);
  };

  return Like;
};
