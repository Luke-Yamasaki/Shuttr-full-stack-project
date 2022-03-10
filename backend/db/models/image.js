'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },

    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2048],
        isUrl(value) {
          if(Validator.isUrl(value) === false) {
            throw new Error('Invalid URL.')
          }
        }
      }
    },
  }, {});

  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    Image.hasMany(models.Comment, { foreignKey: 'imageId' });
    Image.hasMany(models.ImageTag, { foreignKey: 'imageId' });
  };

  Image.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, title, description, imageUrl } = this; // context will be the User instance
    return { id, title, description, imageUrl };
  };

  Image.listAll = async function () {
    return await Image.findAll();
  };

  Image.listOne = async function (id) {
    return await Image.findByPk(id);
  };

  Image.searchResults = async function ({searchword}) {
    const { Op } = require('sequelize');
    const images = await Image.findAll({
      where : {
        [Op.or]: {
          title: searchword,
          description: searchword
        }
      }
    })
    return images;
  };

  Image.upload = async function ({ userId, title, description, imageUrl }) {
    const image = await Image.create({
      userId,
      title,
      description,
      imageUrl
    });
    return await Image.findByPk(image.id)
  };

  Image.update = async function ({ imageId, title, description, imageUrl }) {
    const image = await Image.findByPk(imageId)
    await image.update(
      title,
      description,
      imageUrl
    );
    return image;
  };

  Image.delete = async function (imageId) {
    const image = await Image.findByPk(imageId);
    if (!image) throw new Error('Cannot find image.');

    await image.destroy();
    return image.id
  };

  return Image;
};
