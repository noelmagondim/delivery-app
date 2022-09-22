const productService = require('../services/products.service');

const productController = {
  async getAllProducts(_req, res) {
    const allProducts = await productService.getAllProducts();
    return res.status(200).json(allProducts);
  },

  async getProductById(req, res) {
    const { id } = req.params;
    const productId = await productService.getProductById(id);
    return res.status(200).json(productId);
  },
};

module.exports = productController;