const { Router } = require('express');
const validateSale = require('../middlewares/validateSale');
const saleController = require('../controllers/sale.controller');

 const saleRouter = Router();

 saleRouter.post('/', validateSale, saleController.create);

 module.exports = saleRouter;