const { Router } = require('express');
const validateSale = require('../middlewares/validateSale');
const saleController = require('../controllers/sale.controller');

 const saleRouter = Router();

 saleRouter.post('/', validateSale, saleController.create);
 saleRouter.patch('/status', saleController.updateStatus);

 module.exports = saleRouter;