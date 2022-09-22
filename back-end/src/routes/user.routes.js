const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.create);
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.findUserById);
userRouter.get('/login/validate', userController.loginValidate);

module.exports = userRouter;
