const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .isLength({ min: 1})
        .withMessage('Please enter a comment.')
        .bail()
        .exists({ checkFalsy: true })
        .isLength({ max: 300 })
        .withMessage('Comments cannot be longer than 300 characters.'),
        handleValidationErrors
]

module.exports = validateComment;
