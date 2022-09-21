const userService = require('../services/user.service');
const decoded = require('../auth/validateJWT');

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
  
  async findUserById(req, res) {
    const { id } = req.params;
    const user = await userService.findUserById(id);

    if (user.message) {
      return res.status(404).json({ message: 'Invalid id'});
    }
    return res.status(200).json(user);
  },
  
  async create(req, res) {
    const { name, email, password, role } = req.body;

    const token = await userService.create(name, email, password, role);
  
    return res.status(201).json(token);
  },
};

module.exports = userController;
