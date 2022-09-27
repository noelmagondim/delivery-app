const { Router } = require('express');
const express = require('express');

const imagesRouter = Router();

imagesRouter.get('/:filename', express.static('public'));

module.exports = imagesRouter;
