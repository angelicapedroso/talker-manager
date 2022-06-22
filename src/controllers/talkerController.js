const talkerService = require('../services/talkerService');

const getAll = async (_req, res) => {
  const talker = await talkerService.getAll();
  return res.status(200).json(talker);
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    const talkerId = await talkerService.getId(id);
    return res.status(200).json(talkerId);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getId,
};
