'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    }
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.hasMany(models.ImageTag, { foreignKey: tagId });
  };

  Tag.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, title  } = this; // context will be the User instance
    return { id, title };
  };

  Tag.listAll = async function () {
    return Tag.findAll();
  };

  Tag.listOne = async function (id) {
    return Tag.findByPk(id);
  };

  Tag.post = async function ({ title }) {
    const tag = await Tag.create({
      title
    });
    return await Tag.findByPk(tag.id)
  };

  Tag.delete = async function (tagId) {
    const tag = await Tag.findByPk(tagId);
    if(!tag) throw new Error('Cannot find tag.')

    await Tag.destroy({
      where: {
        id: tagId
      }
    });
    return tag.id
  }

  return Tag;
};
