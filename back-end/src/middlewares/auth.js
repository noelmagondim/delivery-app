const jwt = require('jsonwebtoken');
const fs = require('fs');
const CustomError = require('../errors/CustomError');

const auth = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw new CustomError(401, 'Token not provided');

  const secret = fs.readFileSync('jwt.evaluation.key', 'utf8') || process.env.JWT_SECRET;

  await jwt.verify(authorization, secret);

  next();
};

module.exports = auth;
