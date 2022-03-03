const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');
const { User } = require('../../db/models');
const expressValidator = require('express-validator');
console.log(expressValidator)

export const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.')
        .bail()
        .custom((value, { req }) => {
            return new Promise((resolve, reject) => {
                User.findOne({ where: { email: req.body.email } })
                    .then((res) => {
                        console.log("res.....", res);
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
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

  export default validateSignup;
