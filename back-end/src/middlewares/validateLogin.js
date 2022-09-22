const Joi = require('joi');
const CustomError = require('../errors/CustomError');

const validateLogin = (req, _res, next) => {
  const sale = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  }).required();

  const { error } = schema.validate(sale);

  if (error) {
    throw new CustomError(400, error.message);
  }

  next();
}; 

module.exports = validateLogin;
