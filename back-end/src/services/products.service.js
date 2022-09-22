const { Product } = require('../database/models');
const CustomError = require('../errors/CustomError');

const productService = {
  async getAllProducts() {
    const products = await Product.findAll();
    return products;
  },

  async getProductById(id) {
    const product = await Product.findByPk(id);

    if (!product) throw new CustomError(404, 'Product not found');
    return product;
  },
};

module.exports = productService;