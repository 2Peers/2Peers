const { Student } = require('../models/Student');

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
    res.sendStatus(404);
  }
};

const joinClass = async (req, res) => {
  // id is meant to represent the student who intends to join a class
  // code refers to the classroom code that is user provided and used to
  // find the class the student wants to join
  const { code } = req.body;
  // const { id } = req.params;

  try {
    const classId = ''; // make this an await Classroom.findClassByCode(code);
    await Student.joinClass(classId, code);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  addMessage,
  joinClass,
};
