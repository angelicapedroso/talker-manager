const express = require('express');
const { create } = require('../controllers/loginController');
const { validateEmail, validatePassword } = require('../middlewares/loginMid');

const router = express.Router();

router.post('/', validateEmail, validatePassword, create);

module.exports = router;
