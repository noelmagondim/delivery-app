const userService = require('../services/user.service');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;

    const token = await userService.login(email, password);
  
    return res.status(200).json(token);
  },

  async getAll(req, res) {
    const result = await userService.getAll();
    
    return res.status(200).json(result);
  },
}

module.exports = userController;
