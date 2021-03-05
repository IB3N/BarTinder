module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
  });

  User.associate = (model) => {
    User.hasMany(model.like);
    User.belongsToMany(model.group, { through: model.member });
  };

  return User;
};
