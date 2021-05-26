const { Student } = require('../models/Student');
const { Classroom } = require('../models/Classroom');
const { StudentMessages } = require('../models/StudentMessages');
const { StudentMessageRatings } = require('../models/StudentMessageRatings');
const { TeacherMessageRating } = require('../models/TeacherMessageRatings');

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

const joinClass = async (req, res) => {
  const { id } = req.params;
  const { code } = req.body;
  try {
    const classId = await Classroom.getClassByCode(code);
    const joinedClass = await Student.joinClass(id, classId.id);
    res.status(200).json(joinedClass);
  } catch {
    res.sendStatus(500);
  }
};

const getPeerRating = async (req, res) => {
  const { id } = req.params;
  const { classcode } = req.body;
  try {
    const classroom = await Classroom.getClassByCode(classcode);
    const studentMessages = await StudentMessages.getClassMessages(id, classroom.id);
    const calcTotalAvg = async (messages) => {
      const ratings = messages.map(async (msg) => {
        const rating = await StudentMessageRatings.getAvgMessageRatings(msg.id);
        const teacherRating = await TeacherMessageRating.getAvgMessageRatings(msg.id);
        return ((Number(rating.avg) * 0.25) + (Number(teacherRating.avg) * 0.75));
      });
      const resolvedRatings = await Promise.all(ratings);
      const total = resolvedRatings.reduce((acc, cur) => acc + cur, 0) / messages.length;
      return total;
    };
    const overall = await calcTotalAvg(studentMessages);
    res.status(200).json({ rating: overall });
  } catch {
    res.sendStatus(500);
  }
};

const patchUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await Student.patchUser(id, name, email);
    res.status(200).json(user);
  } catch {
    res.sendStatus(500);
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

const getMessageRating = async (req, res) => {
  const { id } = req.params;
  const { messageid } = req.body;
  try {
    const rating = await StudentMessageRatings.getMessageRating(messageid, id);
    res.status(200).json(rating);
  } catch {
    res.sendStatus(500);
  }
};

const patchMessage = async (req, res) => {
  const { id } = req.params;
  const { messageid } = req.body;
  try {
    const updatedMessage = await StudentMessages.patchMessage(id, messageid);
    res.status(200).json(updatedMessage);
  } catch {
    res.sendStatus(500);
  }
};

const addRating = async (req, res) => {
  const messageid = req.params.id;
  const { rating } = req.body;
  // replace this with session user id
  const studentid = req.body.id;
  try {
    await StudentMessageRatings.postMessageRating(messageid, studentid, rating);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

const getAvgMessageRatings = async (req, res) => {
  const { id } = req.params;
  try {
    const rating = await StudentMessageRatings.getAvgMessageRatings(id);
    const teacherRatings = await TeacherMessageRating.getAvgMessageRatings(id);
    res.status(200).json((Number(rating.avg) * 0.25) + (Number(teacherRatings.avg) * 0.75));
  } catch {
    res.sendStatus(500);
  }
};

const patchMessageRating = async (req, res) => {
  const messageid = req.params.id;
  const newRating = req.body.rating;
  // replacec studentid with session later
  const studentid = req.body.id;
  // console.log(messageid, newRating, studentid);
  try {
    const rating = await StudentMessageRatings.patchMessageRating(
      messageid, studentid, newRating,
    );
    res.status(200).json(rating);
  } catch {
    res.sendStatus(500);
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await StudentMessages.deleteMessage(id);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.deleteStudent(id);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  addMessage,
  addRating,
  joinClass,
  getClasses,
  getStudentById,
  getAvgMessageRatings,
  getMessage,
  getPeerRating,
  getMessageRating,
  patchMessage,
  patchUser,
  patchMessageRating,
  deleteMessage,
  deleteUser,
};
