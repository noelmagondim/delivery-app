const userService = require('../services/user.service');
const CustomError = require('../errors/CustomError');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;

    const token = await userService.login(email, password);
  
    return res.status(200).json(token);
  },

  async loginValidate(req, res) {
    const token = req.headers.authorization;

    if (!token) throw new CustomError(401, 'Token not provided');

    const user = await userService.loginValidate(token);

    return res.status(200).json({ role: user.data.role });
  },

  async create(req, res) {
    const { name, email, password, role } = req.body;

    const token = await userService.create(name, email, password, role);
  
    return res.status(201).json(token);
  },
};

module.exports = userController;
