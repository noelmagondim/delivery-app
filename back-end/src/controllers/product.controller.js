const productService = require('../services/products.service');

const productController = {
  async getAllProducts(_req, res) {
    const allProducts = await productService.getAllProducts();
    return res.status(200).json(allProducts);
  },
};

module.exports = productController;