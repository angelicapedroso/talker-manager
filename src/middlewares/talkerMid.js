// const { generateToken } = require('../helpers/token');

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const REGEX_DATE = /\d{2}\/\d{2}\/\d{4}/;
// const TOKEN = generateToken();

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(UNAUTHORIZED)
      .json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res
      .status(UNAUTHORIZED)
      .json({ message: 'Token inválido' });
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (!Number.isInteger(age) || age < 18) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  if (!watchedAt) { //  watchedAt.match(REGEX_DATE
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!REGEX_DATE.test(watchedAt)) { //  watchedAt.match(REGEX_DATE
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (rate === undefined) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate,
  validateTalk,
};
