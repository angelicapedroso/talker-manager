const { generateToken } = require('../helpers/token');

const create = (_req, res) => {
    const token = generateToken();
    return res.status(200).json({ token: `${token}` });
};

module.exports = {
  create,
};
