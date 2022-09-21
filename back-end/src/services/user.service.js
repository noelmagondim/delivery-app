const md5 = require('md5');
const token = require('../auth/createJWT');
const { User } = require('../database/models');
const customError = require('../errors/CustomError');

const userService = {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    
    if (!user) throw new customError(404, 'Incorrect email or password');
  
    const hashPassword = md5(password);
  
    if (hashPassword !== user.password) throw new customError(401, 'Incorrect email or password');
  
    const { id, role, name } = user;
  
    const auth = token({ id, role, name });
    return auth;
  },

  async findUserById(id) {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password']},
        where: { id },
    });
    if (!user) throw new customError(404, 'User does not exist');

    return user;
  }
}

module.exports = userService;
