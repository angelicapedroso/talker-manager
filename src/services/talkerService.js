const readTalkerFile = require('../helpers/readTalkerFile');

const getAll = async () => {
    const talkers = await readTalkerFile();
    return talkers;
};

module.exports = {
  getAll,
};
