const { Router } = require('express');
const validateSale = require('../middlewares/validateSale');
const validateSaleStatus = require('../middlewares/validateSaleStatus');
const saleController = require('../controllers/sale.controller');

 const saleRouter = Router();

 saleRouter.post('/', validateSale, saleController.create);
 saleRouter.patch('/status/:saleId', validateSaleStatus, saleController.updateStatus);

 module.exports = saleRouter;