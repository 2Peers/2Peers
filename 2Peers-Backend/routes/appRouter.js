const express = require('express');
const { Auth } = require('../models/Auth');
// const { Students } = require('../models/Students');

const router = express.Router();
const studentRouter = require('./studentRouter');
const teacherRouter = require('./teacherRouter');
// const bcrypt = require('bcrypt');

router.get('/api', (req, res) => {
  res.send({ message: 'Heyyyyyyyyy' });
});

router.post('/api/signup', (req, res) => {
  if (req.body.checkbox !== 'on') {
    Auth.studentSignUp(req.body);
    res.send({ message: 'student successfully signed up' });
  } else {
    Auth.teacherSignUp(req.body);
    res.send({ message: 'teacher successfully signed up' });
  }
});

router.use('/student', studentRouter);
router.use('/teachers', teacherRouter);

module.exports = router;
