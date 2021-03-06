'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
  }, {});

  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId'});
    Comment.belongsTo(models.Image, { foreignKey: 'imageId' });
  };

  Comment.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, title, description, commentUrl } = this; // context will be the User instance
    return { id, title, description, commentUrl };
  };

  Comment.listAll = async function (id) {
    return await Comment.findAll({where:{imageId: id}});
  };

  Comment.listOne = async function (id) {
    return await Comment.findByPk(id);
  };

  Comment.post = async function ({ userId, imageId, content }) {
    const comment = await Comment.create({
      userId,
      imageId,
      content
    });
    return await Comment.findByPk(comment.id);
  };

  Comment.edit = async function ({ userId, imageId, commentId, content }) {
    const comment = await Comment.update(
        {userId,
        imageId,
        content},
        {
        where: {
          id: commentId
        }
      }
    );
    return await Comment.findByPk(comment.id);
  };

  Comment.delete = async function (commentId) {
    const comment = await Comment.findByPk(commentId);
    if (!comment) throw new Error('Cannot find comment.');

    await Comment.destroy({ where: { id: comment.id }});
    return comment.id;
  };

  return Comment;
};
