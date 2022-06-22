const readTalkerFile = require('../helpers/readTalkerFile');

const getAll = async () => {
  const talkers = await readTalkerFile();
  return talkers;
};

const getId = async (p) => {
  const talkers = await readTalkerFile();
  const talkerId = talkers.find(({ id }) => id === Number(p));
  if (!talkerId) throw new Error('Pessoa palestrante não encontrada');
  return talkerId;
};

module.exports = {
  getAll,
  getId,
};
