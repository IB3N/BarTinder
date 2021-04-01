module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, ARRAY } = DataTypes;
  return sequelize.define('user', {
    firstName: {
      type: STRING,
      allowNull: false,
    },
    lastName: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    friends: {
      type: ARRAY(INTEGER),
      allowNull: true,
    },
  });
};
