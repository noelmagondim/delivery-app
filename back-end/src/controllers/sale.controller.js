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

    const sale = await saleService.updateStatus(status);

    return res.status(201).json(sale);
  },

  async findById(req, res) {
    const { saleId } = req.params;

    const sale = await saleService.findById(saleId);

    return res.status(200).json(sale);
  }
};

module.exports = saleController;
