const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const token = require('../auth/createJWT');
const { User } = require('../database/models');
const CustomError = require('../errors/CustomError');

const userService = {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) throw new CustomError(404, 'User does not exist');
  
    const hashPassword = md5(password);
  
    if (hashPassword !== user.password) throw new CustomError(401, 'Incorrect email or password');
  
    const { name, role } = user;
  
    const auth = token({ name, role });

    return auth;
  },

  async getAll() {
    const result = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return result;
  },
  
  async findUserById(id) {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password']},
        where: { id },
    });
    if (!user) throw new customError(404, 'User does not exist');

    return user;
  },
  
  async loginValidate(tokenLogin) {
    const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8') || process.env.JWT_SECRET;

    const user = await jwt.verify(tokenLogin, SECRET);

    return user;
  },

  async create(name, email, hashPassword, role) {
    const user = await User.findOne({ where: { email } });

    if (user) throw new CustomError(409, 'Email already registered');

    const password = md5(hashPassword);
  
    const newUser = await User.create({ name, email, password, role });

    return newUser;
  },
};

module.exports = userService;
