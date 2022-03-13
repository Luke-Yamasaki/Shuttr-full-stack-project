'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail(value) {
          if(!Validator.isEmail(value)) {
            throw new Error('Invalid email address.')
          }
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 12,
        max: 130,
        isInt(value) {
          if(Validator.isInt(value) === false) {
            throw new Error('Age must be a number.')
          }
        }
      }
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl(value) {
          if(Validator.isUrl(value) === false) {
            throw new Error('Invalid image address.')
          }
        }
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'age', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Image, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' })
  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, firstName, lastName, username, age, email, profileImageUrl } = this; // context will be the User instance
    return { id, firstName, lastName, username, age, email, profileImageUrl };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   };

  User.listAll = async function () {
    return await User.scope('currentUser').findAll();
  }

  User.listOne = async function (id) {
  return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        email: email
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, age, email, password }) {
    const profileImageUrl = 'https://combo.staticflickr.com/pw/images/buddyicon02.png';
    const hashedPassword = bcrypt.hashSync(password);

    let username;
    if(firstName.length + lastName.length >= 6) {
      username = firstName.concat(lastName).toLowerCase();
    } else {
      const randomNumber = Math.floor(Math.random()*1000).toString();
      username = firstName.concat(lastName, randomNumber).toLowerCase();
    }

    const user = await User.create({
      firstName,
      lastName,
      username,
      age,
      email,
      profileImageUrl,
      hashedPassword
    });

    return await User.scope('currentUser').findByPk(user.id);

  };

  User.editInfo = async function ({ userId, firstName, lastName, username, email, profileImageUrl, password }) {
    const user = await User.scope('loginUser').findByPk(userId);

    if(user && user.validatePassword(password)) {
      await user.update({
      firstName,
      lastName,
      username,
      email,
      profileImageUrl
    })

    return await User.scope('currentUser').findByPk(user.id);
    }



  }

  // User.editPassword = async function ({ password, newPassword, confirmedPwrd }) {
  //   if(newPassword !== confirmedPwrd) throw new Error('The new passwords do not match.');
  //   const hashedOldPassword = bcrypt.hashSync(password);
  //   const hashedNewPassword = bcrypt.hashSync(confirmedPwrd);

  //   const user = await User.scope('loginUser').update(
  //     {
  //       hashedPassword: hashedNewPassword
  //     },
  //     {
  //       where: {
  //         hashedPassword: hashedOldPassword
  //       }
  //     }
  //   );

  //   if (user && user.validatePassword(confirmedPwrd)) {
  //     return await User.scope('currentUser').findByPk(user.id);
  //   }
  // }

  User.delete = async function ({ email, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        email: email
      }
    });
    if (user && user.validatePassword(password)) {
      await user.destroy();
      return user.id
    }
  };

  return User;
};
