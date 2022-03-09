const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');
const { User } = require('../db/models/user');

const validateUpdate = [
    check('firstName')
        .exists({ checkFalsy: true})
        .not()
        .isEmail()
        .withMessage('Please provide a valid first name.')
        .isLength({max: 50})
        .withMessage('Sorry, we cannot display first names longer than 50 characters.')
        .bail(),
    check('lastName')
        .exists({ checkFalsy: true})
        .not()
        .isEmail()
        .withMessage('Please provide a valid last name.')
        .isLength({max: 50})
        .withMessage('Sorry, we cannot display last names longer than 50 characters.')
        .bail(),
    check('age')
        .exists( {checkFalsy: true })
        .isInt()
        .withMessage('Please provide a valid age.')
        .bail()
        .isInt({ min: 12 })
        .withMessage('You must be 12 years or older to register.')
        .bail()
        .isInt({ max: 130 })
        .withMessage('Invalid age range.'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.')
        .bail()
        .custom((value, { req }) => {
            return new Promise((resolve, reject) => {
                User.findOne({ where: { email: req.body.email } })
                    .then((res) => {
                        if (res) {
                            reject("Email already taken");
                        } else {
                            resolve();
                        }
                    })
                    .catch((err) => {
                    reject("Database error: ", err.message);
                });
            });
        }),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.')
        .bail()
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.')
        .bail()
        .custom((value, { req }) => {
            return new Promise((resolve, reject) => {
                User.findOne({ where: { username: req.body.username } })
                    .then((res) => {
                        if (res) {
                            reject("Username already taken");
                        } else {
                            resolve();
                        }
                    })
                    .catch((err) => {
                    reject("Database error: ", err.message);
                });
            });
        }),
    check('profileImageUrl')
        .isURL()
        .withMessage('Please provide a valid image URL.')
        .bail()
        .isLength({ min: 2, max: 2048}),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

module.exports = validateUpdate;
