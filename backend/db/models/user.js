'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    profileImageUrl: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Image, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' })
  };
  return User;
};
