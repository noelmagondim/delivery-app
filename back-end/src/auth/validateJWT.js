require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const decoded = (payload) => {
  const token = jwt.verify(payload, SECRET);
  console.log(token);
  return token.data.email;
};

module.exports = decoded;
