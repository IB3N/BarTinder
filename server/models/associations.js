'use strict';

module.exports.associations = (sequelize) => {
  const { user, like, group } = sequelize.models;
  user.hasMany(like);
  like.belongsTo(user);
  user.belongsToMany(group, { through: 'member' });
  group.belongsToMany(user, { through: 'member' });
};
