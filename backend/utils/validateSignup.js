const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');
const { User } = require('../db/models/user');

const validateSignup = [
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
        .custom((value, {req}) => {
            if(req.body.age > 130) {
                throw new Error('Invalid age range.')
            } else if(req.body.age < 12) {
                throw new Error('You must be 12 years or older to register.')
            }
        }),
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
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];


module.exports = validateSignup;
