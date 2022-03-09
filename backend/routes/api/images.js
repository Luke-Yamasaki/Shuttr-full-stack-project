const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models/image');
const validateImage = require('../../utils/validateImage');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const images = await Image.listAll();
        return res.json(images);
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const Image = await Image.listOne(req.params.id);
        return res.json(Image)
    })
)

router.post(
    '/',
    validateImage,
    asyncHandler(async (req, res) => {
        const { userId, title, description, imageUrl } = req.body;
        const image = await Image.upload({ userId, title, description, imageUrl });
        return res.json(image);
    })
);

router.put(
    '/:id',
    validateImage,
    asyncHandler(async (req, res) => {
        const { imageId, title, description, imageUrl } = req.body;
        const image = await Image.update({ imageId, title, description, imageUrl });
        return res.json(image);
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = await Image.delete(req.params.id);
        return res.json({ id })
    })
)

module.exports = router;
