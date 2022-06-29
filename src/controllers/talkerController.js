const talkerService = require('../services/talkerService');
const { readTalkerFile } = require('../helpers/handleTalkerFile');

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

const create = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await readTalkerFile();
  const talker = await talkerService.create({
    name,
    age,
    id: talkers.length += 1,
    talk,
  });
  return res.status(201).json(talker);
};

const update = async (req, res) => {
  const { body: { name, age, talk }, params: { id } } = req;
  const talker = await talkerService.update({
    name,
    age,
    id: Number(id),
    talk,
  });
  return res.status(200).json(talker);
};

module.exports = {
  getAll,
  getId,
  create,
  update,
};
