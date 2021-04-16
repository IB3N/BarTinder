'use strict';

module.exports.associations = (sequelize) => {
  const { user, like, group } = sequelize.models;
  user.hasMany(like);
  like.belongsTo(user);
  user.belongsToMany(group, { through: 'Member' });
  group.belongsToMany(user, { through: 'Member' });
};
