const express = require('express');
const bcrypt = require('bcrypt');
const { Student } = require('../models/Student');
const { Teacher } = require('../models/Teacher');

const router = express.Router();

let userSess = { user: '', valid: '', role: '', session: '' };

router.post('/signup', async (req, res) => {
  try {
    if (req.body.checkbox === true) {
      debugger;
      await bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if (err) {
          res.send({ message: 'error' });
        } else {
          req.body.encrypt = hash;
          debugger;
          Teacher.signUp(req.body);
          res.send({ message: 'signed up as a teacher' });
        }
      });
    } else {
      await bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if (err) {
          res.send({ message: 'error' });
        } else {
          req.body.encrypt = hash;
          Student.signUp(req.body);
          res.send({ message: 'signed up as a student' });
        }
      });
    }
  } catch (error) {
    res.send({ message: 'sign up total err' });
  }
});

router.post('/signin', async (req, res) => {
  const { encryptedpassword } = req.body;
  try {
    if (req.body.checkbox) {
      const user = await Teacher.getTeacher(req.body);
      if (user) {
        await bcrypt.compare(encryptedpassword, user.encryptedpassword, (err, results) => {
          if (results) {
            req.session.user = user;
            userSess.valid = true;
            userSess.checkbox = true;
            userSess.role = 'teacher';
            userSess.user = user;
            userSess.session = req.session.id;
            res.status(200).json(userSess);
          } else {
            res.sendStatus(404);
          }
        });
      }
    } else {
      const user = await Student.getStudent(req.body);
      if (user) {
        await bcrypt.compare(encryptedpassword, user.encryptedpassword, (err, results) => {
          if (results) {
            req.session.user = user;
            userSess.valid = true;
            userSess.checkbox = false;
            userSess.role = 'student';
            userSess.user = user;
            userSess.session = req.session.id;
            res.status(200).json(userSess);
          } else {
            res.sendStatus(404);
          }
        });
      }
    }
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get('/logout', (req, res) => {
    req.session.destroy()
    userSess = { user: '', valid: '', role: '', session: '' };
    res.status(200).json(userSess);
});

router.get('/api', (req, res) => {
  res.send({ passedData: userSess });
});

module.exports = router;
