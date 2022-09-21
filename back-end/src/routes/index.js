const { Router } = require('express');
const userRouter = require('./user.routes');
const productsRouter = require('./product.routes');

const router = Router();

router.use('/login', userRouter);
router.use('/product', productsRouter);

module.exports = router;
