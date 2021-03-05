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
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (model) => {
    // Users has many likes
    User.hasMany(model.like);

    // Users have many groups and groups have many users
    User.belongsToMany(model.group, { through: model.member });

    // Users have many friends
    User.hasMany(model.friend);
    model.friend.belongsTo(User);
  };

  return User;
};
