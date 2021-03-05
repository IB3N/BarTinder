module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Member;
};
