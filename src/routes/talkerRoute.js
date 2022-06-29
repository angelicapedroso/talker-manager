const express = require('express');
const { getAll, getId, create, update } = require('../controllers/talkerController');
const {
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate,
  validateTalk } = require('../middlewares/talkerMid');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getId);

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  create);

router.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate, 
  update);

module.exports = router;
