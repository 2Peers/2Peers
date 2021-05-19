const express = require('express');

const router = express.Router();
const studentController = require('../controllers/studentController');
// route to post a new message from a student
router.get('/:id', studentController.getMessage);
router.patch('/:id', studentController.patchMessage);
router.delete('/:id', studentController.deleteMessage);

module.exports = router;
