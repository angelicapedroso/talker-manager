const express = require('express');
const { getAll, getId } = require('../controllers/talkerController');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getId);

module.exports = router;
