const { Router } = require('express');
const userRouter = require('./user.routes');

const router = Router();

router.use('/users', userRouter);

module.exports = router;
