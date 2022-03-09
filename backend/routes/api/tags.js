const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Tag } = require('../../db/models/tag');
const { ImageTag } = require('../../db/models/imagetag');
const validateTag = require('../../utils/validateTag');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const tags = await Tag.listAll();
        return res.json(tags);
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const tag = await Tag.listOne(req.params.id);
        return res.json(tag)
    })
);

router.post(
    '/',
    validateTag,
    asyncHandler(async (req, res) => {
        const { title } = req.body;
        const tag = await Tag.upload({ title });
        return res.json(tag);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = await Tag.delete(req.params.id);
        return res.json({ id })
    })
);

module.exports = router;
