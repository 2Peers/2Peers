const express = require('express');

const router = express.Router();
const studentController = require('../controllers/studentController');
// route to post a new message from a student
router.post('/:id/message', studentController.addMessage);
router.post('/:id/classes', studentController.joinClass);

module.exports = router;
