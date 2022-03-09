const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models/image');
const { Comment } = require('../../db/models/comment');
const { ImageTag } = require('../../db/models/tag');
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
        const id = req.params.id;
        const image = await Image.listOne(id);
        const comments = await Comment.findAll(id);
        // const imageTags = await ImageTag.listAllTags(id);
        // const tags = [];
        // imageTags.forEach((imageTag) => tags.push(imageTag[]) )
        return res.json(image, comments)
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
