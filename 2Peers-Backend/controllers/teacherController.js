const { Classroom } = require('../models/Classroom');
const Teacher = require('../models/Teacher');

const createClass = async (req, res) => {
  const { code } = req.body;
  const { id } = req.params;
  await Teacher.createClass(code, id);
  res.sendStatus(200);
};

const getClasses = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await Classroom.getTeacherClasses(id);
    res.status(200).json(classes);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  createClass,
  getClasses,
};
