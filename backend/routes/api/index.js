const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images.js');
const commentsRouter = require('./comments.js');
const tagsRouter = require('./tags.js');
// const imagetagsRouter = require('./imagetag.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);
router.use('/images/:id/comments', commentsRouter);
router.use('/tags', tagsRouter);


module.exports = router;
