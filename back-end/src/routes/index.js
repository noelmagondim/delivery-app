const { Router } = require('express');
const login = require('./user.routes');

const router = Router();

router.use('/login', login);
router.use('/users', login);

module.exports = router;
