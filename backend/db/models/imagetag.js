'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageTag = sequelize.define('ImageTag', {
    imageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ImageTag.associate = function(models) {
    // associations can be defined here
    ImageTag.belongsTo(models.Image, { foreignKey: imageId });
    ImageTag.belongsTo(models.Tag, { foreignKey: tagId});
  };

  ImageTag.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, imageId, tagId } = this; // context will be the User instance
    return { id, imageId, tagId };
  };

  ImageTag.listAllImages = async function (tagId) {
    return ImageTag.findAll({ where:{ tagId: tagId }});
  };

  ImageTag.listAllTags = async function (imageId) {
    return ImageTag.findAll({where:{ imageId: imageId }})
  };

  ImageTag.countImages = async function (tagId) {
    return ImageTag.count({where: { tagId: tagId }})
  };

  ImageTag.countTags = async function (imageId) {
    return ImageTag.count({where: { imageId: imageId }})
  };

  ImageTag.post = async function ({ imageId, tagId }) {
    const imageTag = await ImageTag.create({
      imageId,
      tagId
    });
    return await ImageTag.findByPk(imageTag.id)
  };

  ImageTag.delete = async function (tagId) {
    const tag = await ImageTag.findByPk(tagId);
    if(!tag) throw new Error('Cannot find tag.')

    await ImageTag.destroy({
      where: {
        id: tagId
      }
    });
    return tag.id
  }
  
  return ImageTag;
};
