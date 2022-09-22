const { Product } = require('../database/models');

const productService = {
  async getAllProducts() {
    const products = await Product.findAll();
    return products;
  },
};

module.exports = productService;