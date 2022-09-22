const { Router } = require('express');
const productController = require('../controllers/product.controller');

const productsRouter = Router();

productsRouter.get('/products', productController.getAllProducts);
productsRouter.get('/products/:id', productController.getProductById);

module.exports = productsRouter;
