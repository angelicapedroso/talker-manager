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
  await writeTalkerFile([...talkers, params]);
};

//
//
//
// router.post('/', async (req, res) => {
//   const { name, age, talk } = req.body;
//   const { authorization } = req.headers;
//   const talkers = JSON.parse(await fs.readFile(FILE));
//   const id = talkers.length + 1;
//   const result = validateAll(authorization, name, age, talk);
//   const newTalker = {
//     id,
//     name,
//     age,
//     talk,
//   };

//   if (result) {
//     return res.status(result.status).send({ message: result.message });
//   }
//   talkers.push(newTalker);
//   await fs.writeFile(FILE, JSON.stringify(talkers));
//   return res.status(201).send(newTalker);
// });

module.exports = {
  getAll,
  getId,
  create,
};

//
//
