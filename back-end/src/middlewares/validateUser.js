const Joi = require('joi');
const CustomError = require('../errors/CustomError');

const validateUser = (req, _res, next) => {
  const sale = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    role: Joi.string().required(),
  }).required();

  const { error } = schema.validate(sale);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next();
}; 

module.exports = validateUser;
