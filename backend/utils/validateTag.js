const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const validateTag = [
    check('title')
        .isLength({min: 1, max: 50 })
        .withMessage('Tags cannot be longer than 50 characters.'),
        handleValidationErrors
]

module.exports = validateTag;
