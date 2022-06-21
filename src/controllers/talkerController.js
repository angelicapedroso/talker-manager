const talkerService = require('../services/talkerService');

const getAll = async (_req, res) => {
    const talker = await talkerService.getAll();
    return res.status(200).json(talker);
};

module.exports = {
  getAll,
};
