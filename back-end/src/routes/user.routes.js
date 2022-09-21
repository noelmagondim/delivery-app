const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/', userController.login);

module.exports = userRouter;
