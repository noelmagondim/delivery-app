require('dotenv').config();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const jwtConfig = require('./jwtConfg');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8') || process.env.JWT_SECRET;

const token = (payload) => {
  const newToken = jwt.sign(payload, SECRET, jwtConfig);
  return { token: newToken };
};

module.exports = token;
