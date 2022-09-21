const express = require('express');
require('express-async-errors');
const { User } = require('../database/models');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.get('/coffee', async (_req, res) => {
  const user = await User.findAll()

  res.status(200).json(user);
});

app.use(errorHandler)

module.exports = app;
