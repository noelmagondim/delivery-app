const { Router } = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');


const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.create);
userRouter.get('/', auth, userController.getAll);
userRouter.get('/:id', auth, userController.findUserById);
userRouter.get('/login/validate', userController.loginValidate);

module.exports = userRouter;
