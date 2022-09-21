const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const data = await loginService.login(req.body);

    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
