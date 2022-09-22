const express = require('express');
require('express-async-errors');
const router = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use(router);

app.use(errorHandler);

module.exports = app;
