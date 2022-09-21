const userService = require('../services/user.service');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;

    const token = await userService.login(email, password);
  
    return res.status(200).json(token);
  },

  async create(req, res) {
    const { name, email, password, role } = req.body;

    const token = await userService.create(name, email, password, role);
  
    return res.status(201).json(token);
  },
};

module.exports = userController;
