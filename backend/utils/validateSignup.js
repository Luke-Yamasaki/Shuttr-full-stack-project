const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');
const { User } = require('../db/models');

const validateSignup = [
    check('firstName')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a first name.')
        .bail()
        .not()
        .isEmail()
        .withMessage('Please provide a valid first name.')
        .bail()
        .isLength({max: 50})
        .withMessage('Sorry, we cannot display first names longer than 50 characters.'),
    check('lastName')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a last name.')
        .bail()
        .not()
        .isEmail()
        .withMessage('Please provide a valid last name.')
        .bail()
        .isLength({max: 50})
        .withMessage('Sorry, we cannot display last names longer than 50 characters.'),
    check('age')
        .exists( {checkFalsy: true })
        .withMessage('Please enter your age.')
        ,
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email.')
        .bail()
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
            });
        }),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('confirmPassword')
        .exists({ checkFalsy: true })

        .withMessage('Please confirm your password.')
        .bail()
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match.'),
    handleValidationErrors
];


module.exports = validateSignup;
