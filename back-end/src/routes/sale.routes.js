const { Router } = require('express');
const validateSale = require('../middlewares/validateSale');
const validateSaleStatus = require('../middlewares/validateSaleStatus');
const saleController = require('../controllers/sale.controller');
const auth = require('../middlewares/auth');

const saleRouter = Router();

saleRouter.post('/', auth, validateSale, saleController.create);
saleRouter.patch('/status/:saleId', auth, validateSaleStatus, saleController.updateStatus);
saleRouter.get('/:saleId', auth, saleController.findById);
saleRouter.get('/user/:userId', auth, saleController.findByUser);
saleRouter.get('/seller/:sellerId', auth, saleController.findBySeller);

module.exports = saleRouter;
