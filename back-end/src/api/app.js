const express = require('express');
require('express-async-errors');
const CustomError = require('../errors/CustomError');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.get('/coffee', (req, res) => {
  throw new CustomError(401, 'You need to login to access this resource');

  res.status(418).end();
});

app.use(errorHandler)

module.exports = app;
