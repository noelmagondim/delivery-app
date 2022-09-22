const { Router } = require('express');
const validateSale = require('../middlewares/validateSale');
const validateSaleStatus = require('../middlewares/validateSaleStatus');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.post('/', validateSale, saleController.create);
saleRouter.patch('/status/:saleId', validateSaleStatus, saleController.updateStatus);
saleRouter.get('/:saleId', saleController.findById);
saleRouter.get('/user/:userId', saleController.findByUser);
saleRouter.get('/seller/:sellerId', saleController.findBySeller);

module.exports = saleRouter;
