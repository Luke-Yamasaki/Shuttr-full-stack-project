'use strict';
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
      unique: true,
      validate: {
        len: [2, 50],
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
      unique: true,
      validate: {
        len: [3, 256],
        isEmail(value) {
          if(Validator.isNotEmail(value)) {
            throw new Error('Invalid email address.')
          }
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
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
    const { id, firstName, lastName, username, email } = this; // context will be the User instance
    return { id, firstName, lastName, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: email
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, age, email, password }) {
    const username = firstName.concat(lastName);
    const profileImageUrl = 'https://combo.staticflickr.com/pw/images/buddyicon02.png';
    const hashedPassword = bcrypt.hashSync(password);
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

  User.edit = async function ({ firstName, lastName, username, email, age, profileImageUrl, password  }) {
    const hashedPassword = bcrypt.hashSync(password);
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
  }

  User.delete = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const hashedPassword = bcrypt.hashSync(password);

    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: credential,
          username: credential
        }
      }
    });

    if (user && user.validatePassword(password)) {
      return await User.destroy({
        where: {
          id: user.id
        }
      })
    }
  }

  return User;
};
