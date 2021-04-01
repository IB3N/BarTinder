module.exports = (sequelize, DataTypes) => {
  const { INTEGER, BOOLEAN } = DataTypes;
  return sequelize.define('like', {
    drinkId: {
      type: INTEGER,
      allowNull: false,
    },
    like: {
      type: BOOLEAN,
      allowNull: false,
    },
  });
};
