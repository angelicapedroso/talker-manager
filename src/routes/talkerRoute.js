const express = require('express');
const { getAll } = require('../controllers/talkerController');

const router = express.Router();

router.get('/', getAll);

module.exports = router;
