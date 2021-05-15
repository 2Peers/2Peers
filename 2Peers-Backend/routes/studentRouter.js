const express = require('express');

const router = express.Router();
const studentController = require('../controllers/studentController');
// route to post a new message from a student
router.post('/:id/message', studentController.addMessage);

module.exports = router;
