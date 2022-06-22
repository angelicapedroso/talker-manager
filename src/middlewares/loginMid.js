const HTTP_BAD_REQUEST = 400;
const REGEX_EMAIL = /\S+@\S+\.\S+/; // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || !email.length) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "email" é obrigatório' });
  }
  if (!email.match(REGEX_EMAIL)) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || !password.length) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};
