const { Router } = require('express');
const userRouter = require('./user.routes');
const saleRouter = require('./sale.routes');
const productsRouter = require('./product.routes');
const imagesRouter = require('./images.routes');

const router = Router();

router.use('/users', userRouter);
router.use('/sales', saleRouter);
router.use('/customer', productsRouter);
router.use('/images', imagesRouter);

module.exports = router;
