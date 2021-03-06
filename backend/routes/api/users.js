const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const validateSignup = require('../../utils/validateSignup');
const validateUpdate = require('../../utils/validateUpdate');
const { User } = require('../../db/models')

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const users = await User.scope('currentUser').findAll();
        return res.json(users);
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const user = await User.listOne(req.params.id);
        return res.json(user)
    })
)

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { firstName, lastName, age, email, password } = req.body;

      const user = await User.signup({ firstName, lastName, age, email, password });

      setTokenCookie(res, user);

      return res.json({
        user
      });
    })
  );

router.put(
    '/:id',
    validateUpdate,
    asyncHandler(async (req, res) => {
        const { firstName, lastName, username, email, profileImageUrl, password } = req.body
        const user = await User.editInfo({ firstName, lastName, username, email, profileImageUrl, password })
        await setTokenCookie(res, user);

        return res.json({ user });
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = await User.delete(req.params.id);
        return res.json({ id })
    })
)

module.exports = router;
