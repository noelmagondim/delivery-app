const { Router } = require('express');
const productController = require('../controllers/product.controller');

const productsRouter = Router();

productsRouter.get('/', productController.getAllProducts);
productsRouter.get('/:id', productController.getProductById);

module.exports = productsRouter;
