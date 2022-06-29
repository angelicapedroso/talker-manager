const { readTalkerFile, writeTalkerFile } = require('../helpers/handleTalkerFile');

const getAll = async () => {
  const talkers = await readTalkerFile();
  return talkers;
};

const getId = async (params) => {
  const talkers = await readTalkerFile();
  const talkerId = talkers.find(({ id }) => id === Number(params));
  if (!talkerId) throw new Error('Pessoa palestrante não encontrada');
  return talkerId;
};

const create = async (params = {}) => {
  const talkers = await readTalkerFile();
  const newTalker = [...talkers, params];
  await writeTalkerFile(newTalker);
  return params;
};

const update = async (params = {}) => {
  const talkers = await readTalkerFile();
  const talkersFilter = talkers.filter(({ id }) => id !== Number(params.id));
  const newTalker = [...talkersFilter, params];
  await writeTalkerFile(newTalker);
  return params;
};

module.exports = {
  getAll,
  getId,
  create,
  update,
};
