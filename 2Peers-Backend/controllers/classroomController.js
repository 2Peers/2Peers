const { Classroom } = require('../models/Classroom');

const getClass = async (req, res) => {
  try {
    const classroom = await Classroom.getClass(req.params.id);
    res.status(200).json(classroom);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getClasses = async (req, res) => {
  try {
    const { user } = req.session;
    const classrooms = await Classroom.getClasses(user.id);
    res.status(200).json(classrooms);
  } catch {
    res.sendStatus(500);
  }
};

const getClassMember = async (req, res) => {
  const { id } = req.params;
  const { studentid } = req.body;
  try {
    const student = await Classroom.getClassMember(studentid, id);
    res.status(200).json(student);
  } catch {
    res.sendStatus(500);
  }
};

const getClassMembers = async (req, res) => {
  try {
    const classmates = await Classroom.getClassMembers(req.params.id);
    res.status(200).json(classmates);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getClassMessages = async (req, res) => {
  try {
    const studentMessages = await Classroom.getStudentClassMessages(req.params.id);
    const teacherMessages = await Classroom.getTeacherClassMessages(req.params.id);
    const orderedMessages = [...studentMessages, ...teacherMessages].sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate - bDate;
    });
    res.status(200).json(orderedMessages);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  getClass,
  getClasses,
  getClassMember,
  getClassMembers,
  getClassMessages,
};
