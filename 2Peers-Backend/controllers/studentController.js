const { Student } = require('../models/Student');
const { Classroom } = require('../models/Classroom');
const { StudentMessages } = require('../models/StudentMessages');

const addMessage = async (req, res) => {
  // student id to get the specific student that is sending the message
  const studentId = req.params.id;
  try {
    // send new message information to the database with all student messages
    // sending student id, in the body only specify class by id, message text and message rating
    const newMessage = await Student.addMessage(req.body, studentId);
    res.status(201).json(newMessage);
  } catch {
    // if new message could not be created, status of 404 should appear.
    res.status(404);
  }
};

const getClasses = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await Classroom.getClasses(id);
    res.status(200).json(classes);
  } catch {
    res.sendStatus(500);
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.getStudentById(id);
    res.status(200).json(student);
  } catch {
    res.sendStatus(500);
  }
};

const getMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await StudentMessages.getMessage(id);
    res.status(200).json(message);
  } catch {
    res.sendStatus(500);
  }
};

const patchMessage = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    await StudentMessages.patchMessage(id, message);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

const updateRating = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  try {
    await StudentMessages.updateRating(id, rating);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  addMessage,
  getClasses,
  getStudentById,
  getMessage,
  patchMessage,
  updateRating,
};
