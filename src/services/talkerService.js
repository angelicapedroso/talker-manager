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
  const newTalkers = [...talkers, params];
  await writeTalkerFile(newTalkers);
  return params;
};

module.exports = {
  getAll,
  getId,
  create,
};

//
//
