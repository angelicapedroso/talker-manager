const express = require('express');
const { getAll, getId, create, update, destroy } = require('../controllers/talkerController');
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

router.delete('/:id', validateToken, destroy);

module.exports = router;
