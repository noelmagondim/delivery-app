const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateUser = require('../middlewares/validateUser');
const validateLogin = require('../middlewares/validateLogin');
const auth = require('../middlewares/auth');


const userRouter = Router();

userRouter.post('/login', validateLogin, userController.login);
userRouter.post('/register', validateUser, userController.create);
userRouter.get('/', auth, userController.getAll);
userRouter.get('/:id', auth, userController.findUserById);
userRouter.get('/login/validate', userController.loginValidate);

module.exports = userRouter;
