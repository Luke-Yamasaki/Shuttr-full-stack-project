'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageTag = sequelize.define('ImageTag', {
    imageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ImageTag.associate = function(models) {
    // associations can be defined here
  };
  return ImageTag;
};