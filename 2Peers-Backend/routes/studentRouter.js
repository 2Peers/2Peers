const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/:id/new', studentController.addMessage)

module.exports = router;