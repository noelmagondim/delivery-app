const Joi = require('joi');
const CustomError = require('../errors/CustomError');

const validateSale = (req, _res, next) => {
  const sale = req.body;

  const schema = Joi.object({
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().required(),
    products: Joi.array().items(Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required(),
    })).required(),
  }).required();

  const { error } = schema.validate(sale);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next();
}; 

module.exports = validateSale;
