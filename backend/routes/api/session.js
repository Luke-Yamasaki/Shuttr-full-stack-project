const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const validateSignup = require('../../utils/validateSignup');
const { User } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your email.')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({min: 6})
    .withMessage('Invalid password'),
  handleValidationErrors
];

router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.login({ email, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

module.exports = router;
