const express = require('express');

const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/:id/classes', teacherController.createClass);

module.exports = router;
