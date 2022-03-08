'use strict';
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
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 300]
      }
    },

    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2048],
        isUrl(value) {
          if(validator.isUrl(value) === false) {
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

  Image.delete = async function (imageId) {
    const image= await Image.findByPk(imageId);
    if (!image) throw new Error('Cannot find image.');

    await Image.destroy({ where: { id: image.id }});
    return image.id;
  }

  Image.update = async function ({ id, title, description, imageUrl }) {
    const imageId = id;
    delete id;
    await Item.update(
      title,
      description,
      imageUrl,
      {
        where: {
          id: imageId
         }
      }
    );
    return await Item.findByPk(id);
  }




  return Image;
};
