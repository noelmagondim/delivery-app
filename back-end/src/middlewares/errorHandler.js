const errorHandler = (err, _req, res, _next) => {
  let { statusCode, message } = err;

  if (message === 'jwt malformed') {
    statusCode = 401;
    message = 'Token must be a valid token';
  }

  return res.status(statusCode || 500).json({ message });
};

module.exports = errorHandler;
