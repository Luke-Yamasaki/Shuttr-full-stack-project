const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a comment.')
        .isLength({min: 1, max: 300 })
        .withMessage('Comments cannot be longer than 300 characters.'),
        handleValidationErrors
]

module.exports = validateComment;
