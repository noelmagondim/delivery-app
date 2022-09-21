const { Router } = require('express');
const login = require('./loginRoute');

const router = Router();

router.use('/login', login);

module.exports = router;
