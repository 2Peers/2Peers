const Teacher = require('../models/Teacher');

const createClass = async (req, res) => {
  const { code } = req.body;
  const { id } = req.params;
  await Teacher.createClass(code, id);
  res.sendStatus(200);
};

module.exports = {
  createClass,
};
