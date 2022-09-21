const saleService = require('../services/sale.service');

const saleController = {
  async create(req, res) {
    const salePayload = req.body;

    const sale = await saleService.create(salePayload);

    return res.status(201).json(sale);
  },

  async updateStatus(req, res) {
    const { status } = req.body;
    const { saleId } = req.params;

    const sale = await saleService.updateStatus(status, saleId);

    return res.status(201).json(sale);
  },

  async findById(req, res) {
    const { saleId } = req.params;

    const sale = await saleService.findById(saleId);

    return res.status(200).json(sale);
  },

  async findByUser(req, res) {
    const { userId } = req.params;

    const sales = await saleService.findByUser(userId);

    return res.status(200).json(sales);
  },

  async findBySeller(req, res) {
    const { sellerId } = req.params;

    const sales = await saleService.findBySeller(sellerId);

    return res.status(200).json(sales);
  }
};

module.exports = saleController;
