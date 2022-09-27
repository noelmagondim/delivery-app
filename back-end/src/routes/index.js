const { Router } = require('express');
const userRouter = require('./user.routes');
const saleRouter = require('./sale.routes');
const productsRouter = require('./product.routes');

const router = Router();

router.use('/users', userRouter);
router.use('/sales', saleRouter);
router.use('/customer', productsRouter);

module.exports = router;
