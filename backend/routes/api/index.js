const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images.js');
const commentsRouter = require('./comments.js');
const tagsRouter = require('./tags.js');
// const imagetagsRouter = require('./imagetag.js')

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo_User'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));

const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);
router.use('/images/:id/comments', commentsRouter);
router.use('/tags', tagsRouter);


module.exports = router;
