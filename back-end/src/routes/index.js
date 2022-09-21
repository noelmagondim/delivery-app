const { Router } = require('express');
const userRouter = require('./user.routes');
const saleRouter = require('./sale.routes');

const router = Router();

router.use('/users', userRouter);
router.use('/sales', saleRouter);

module.exports = router;
