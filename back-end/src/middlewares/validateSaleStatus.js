const Joi = require('joi');
const CustomError = require('../errors/CustomError');

const validateSaleStatus = (req, _res, next) => {
  const sale = req.body;

  const schema = Joi.object({
    status: Joi.string().required(),
  }).required();

  const { error } = schema.validate(sale);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next();
}; 

module.exports = validateSaleStatus;
