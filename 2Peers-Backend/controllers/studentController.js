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
    res.status(404);
  }
};

module.exports = {
  addMessage,
};
