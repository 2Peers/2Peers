const express = require('express');
const { Auth } = require('../models/Auth');
// const { Students } = require('../models/Students');

const router = express.Router();
const studentRouter = require('./studentRouter');
const teacherRouter = require('./teacherRouter');
const classroomRouter = require('./classroomRouter');
// const bcrypt = require('bcrypt');

router.get('/api', (req, res) => {
  res.send({ message: 'Heyyyyyyyyy' });
});

// // made a change to the route from /api/signup
// router.post('/signup', (req, res) => {
//   if (req.body.checkbox !== 'on') {
//     debugger
//     Auth.studentSignUp(req.body);
//     // res.send({ message: 'student successfully signed up' });
//     res.redirect('/login');
//   } else {
//     Auth.teacherSignUp(req.body);
//     // res.send({ message: 'teacher successfully signed up' });
//     res.redirect('/login');
//   }
// })
//made a change to the route from /api/signup
router.post('/signUp', (req, res) => {
  if (req.body.remember_me) {
    debugger
    Auth.teacherSignUp(req.body);
    // res.send({ message: 'student successfully signed up' });
    res.redirect('/login');
  } else {
    debugger
    Auth.studentSignUp(req.body);
    // res.send({ message: 'teacher successfully signed up' });
    res.redirect('/login');
  }
});

router.use('/student', studentRouter);
router.use('/teachers', teacherRouter);
router.use('/classrooms', classroomRouter);

module.exports = router;
