const md5 = require('md5');
const token = require('../auth/createJWT');
const { User } = require('../database/models');
const CustomError = require('../errors/CustomError');

const userService = {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    
    if (!user) throw new CustomError(404, 'Incorrect email or password');
  
    const hashPassword = md5(password);
  
    if (!hashPassword !== user.password) throw new CustomError(401, 'Incorrect email or password');
  
    const { id, role, name } = user;
  
    const auth = token({ id, role, name });
    return auth;
  },
};

module.exports = userService;
