const { Classroom } = require('../models/Classroom');
const Teacher = require('../models/Teacher');

const createClass = async (req, res) => {
  const { code } = req.body;
  const { id } = req.params;
  try {
    const newClass = await Teacher.createClass(code, id);
    res.status(200).json(newClass);
  } catch {
    res.sendStatus(500);
  }
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

const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.getById(id);
    res.status(200).json(teacher);
  } catch {
    res.sendStatus(500);
  }
};

const patchUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await Teacher.patchUser(id, name, email);
    res.status(200).json(user);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  createClass,
  getClasses,
  getTeacherById,
  patchUser,
};
