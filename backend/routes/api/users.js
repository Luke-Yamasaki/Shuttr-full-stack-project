const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const validateSignup = require('../../utils/validateSignup');
const { User } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
        const users = await User.listAll();
        return res.json(users);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const user = await User.listOne(req.params.id);
    return res.json(user)
}))

router.post(
'/',
validateSignup,
asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
    user,
    });
}),
);

router.put('/:id', asyncHandler(async (req, res) => {
    
}))



//TODO router.put and router.delete

module.exports = router;
