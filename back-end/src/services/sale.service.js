const { Sale, SalesProducts, sequelize } = require('../database/models');

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
};

module.exports = saleService;
