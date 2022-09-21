const { Router } = require('express');
const userRouter = require('./user.routes');

const router = Router();

router.use('/login', userRouter);

module.exports = router;
