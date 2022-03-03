const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const validateSignup = require('../../utils/validateSignup');
const { User } = require('../../db/models');

const router = express.Router();

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



//TODO router.put and router.delete

module.exports = router;
