const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const validateImage = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('A title is required.')
        .isLength({min: 1, max: 100 })
        .withMessage('Titles cannot be longer than 100 characters.'),
    check('description')
        .isLength({max: 300})
        .withMessage('Descriptions cannot be longer than 300 characters.'),
    check('imageUrl')
        .isURL()
        .withMessage('Please provide a valid image URL.')
        .isLength({max: 2048})
        .withMessage('Image URLs cannot be longer than 2048 chracters.'),
        handleValidationErrors
]

module.exports = validateImage;
