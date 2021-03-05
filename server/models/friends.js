module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('friend', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Friend.associate = (model) => {
    // Friends have many users
    // Users have many friends
  };

  return Friend;
};
