const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Comment } = require('../../db/models');
const validateComment = require('../../utils/validateComment');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req.body)
        const comments = await Comment.listAll(imageId);
        return res.json(comments);
    })
);

router.get(
    '/all',
    asyncHandler(async (req, res) => {
        console.log(req.body)
        const comments = await Comment.findAll();
        return res.json(comments);
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const comment = await Comment.listOne(req.params.id);
        return res.json(comment)
    })
);

router.post(
    '/',
    validateComment,
    asyncHandler(async (req, res) => {
        const { userId, imageId, content } = req.body;
        const comment = await Comment.upload({ userId, imageId, content });
        return res.json(comment);
    })
);

router.put(
    '/:id',
    validateComment,
    asyncHandler(async (req, res) => {
        const { userId, imageId, content } = req.body;
        const comment = await Comment.edit({ userId, imageId, content });
        return res.json(comment);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = await Comment.delete(req.params.id);
        return res.json({ id })
    })
);

module.exports = router;
