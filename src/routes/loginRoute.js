const express = require('express');
const { create } = require('../controllers/loginController');

const router = express.Router();

router.post('/', create);

module.exports = router;
