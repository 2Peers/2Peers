const { Classroom } = require('../models/Classroom');
const { Teacher } = require('../models/Teacher');
const { TeacherMessageRating } = require('../models/TeacherMessageRatings');

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

const postMessage = async (req, res) => {
  const { id } = req.params;
  const createdMessage = req.body.body.message;
  const classId = req.body.body.classId;
  try {
    const newMessage = await Teacher.addMessage(id, classId, createdMessage);
    console.log(newMessage)
    res.status(200).json(newMessage);
  } catch {
    res.sendStatus(500);
  }
};

const patchMessage = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    const patchedMessage = await Teacher.patchMessage(id, message);
    res.status(200).json(patchedMessage);
  } catch {
    res.sendStatus(500);
  }
};

const getMessageRating = async (req, res) => {
  const { id } = req.params;
  const { messageid } = req.body;
  try {
    const teacherRating = await TeacherMessageRating.getMessageRating(messageid, id);
    res.status(200).json(teacherRating);
  } catch {
    res.sendStatus(500);
  }
};

const postRating = async (req, res) => {
  console.log('here');
  const { id } = req.params;
  const { rating } = req.body;
  const teacherid = req.body.id;
  try {
    const newRating = await TeacherMessageRating.postMessageRating(id, teacherid, rating);
    res.status(200).json(newRating);
  } catch {
    res.sendStatus(500);
  }
};

const patchRating = async (req, res) => {
  const messageid = req.params.id;
  const newRating = req.body.rating;
  const teacherid = req.body.id;
  try {
    const rating = await TeacherMessageRating.patchMessageRating(
      messageid, teacherid, newRating,
    );
    res.status(200).json(rating);
  } catch {
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Teacher.deleteTeacher(id);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  createClass,
  getClasses,
  getTeacherById,
  getMessageRating,
  patchUser,
  patchMessage,
  patchRating,
  postMessage,
  postRating,
  deleteUser,
};
