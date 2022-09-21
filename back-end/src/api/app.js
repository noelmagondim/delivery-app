const express = require('express');
const router = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
