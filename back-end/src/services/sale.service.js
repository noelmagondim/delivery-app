const { CustomError } = require('puppeteer');
const { Sale, SalesProducts, Product, sequelize } = require('../database/models');

const saleService = {
  async create(payload) {
    const sale = this.saleTransaction(payload);

    return sale;
  },

  async updateStatus(status, id) {
    const sale = Sale.update({ status }, { where: { id } });

    return sale;
  },

  async saleTransaction(payload) {
    const transaction = await sequelize.transaction(async (t) => {
      const sale = await Sale.create({
        ...payload,
        saleDate: new Date(),
        status: 'Pendente',
      }, { transaction: t });

      const productsWithId = payload.products.map((product) => ({
        ...product,
        saleId: sale.id,
      }));

      await SalesProducts.bulkCreate(productsWithId, { transaction: t });

      return sale;
    });

    return transaction;
  },

  async findById(id) {
    const sale = Sale.findByPk(id, {
      include: [{ model: Product, as: 'products' }]   
    });

    if (!sale) throw new CustomError(401, 'Sale not found');

    return sale;
  },

  async findByUser(userId) {
    const sales = Sale.findAll({where: { userId }});

    if (!sales) throw new CustomError(401, 'User doesn\'t have order\'s yet');

    return sales;
  },

  async findBySeller(sellerId) {
    const sales = Sale.findAll({where: { sellerId }});

    if (!sales) throw new CustomError(401, 'Seller doesen\'t have sales yet');

    return sales;
  }
};

module.exports = saleService;
