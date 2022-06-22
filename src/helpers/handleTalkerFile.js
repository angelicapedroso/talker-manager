const fs = require('fs/promises');
const path = require('path');

const FILE = path.resolve(__dirname, '../../talker.json');

const readTalkerFile = async () => {
  const talkerFile = await fs.readFile(FILE, 'utf8');
  const talker = JSON.parse(talkerFile);
  return talker;
};

const writeTalkerFile = async (params) => {
  const data = JSON.stringify(params);
  const talkers = await fs.writeFile(FILE, data, 'utf-8');
  return talkers;
};

module.exports = {
  readTalkerFile,
  writeTalkerFile,
};
