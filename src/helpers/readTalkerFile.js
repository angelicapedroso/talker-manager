const fs = require('fs/promises');
const path = require('path');

const FILE = path.resolve(__dirname, '../../talker.json');

const readTalkerFile = async () => {
  const talkerFile = await fs.readFile(FILE, 'utf8');
  const talker = JSON.parse(talkerFile);
  return talker;
};

module.exports = readTalkerFile;
