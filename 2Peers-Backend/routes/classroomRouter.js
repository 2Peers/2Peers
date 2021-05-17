const express = require('express');

const router = express.Router();
const classroomController = require('../controllers/classroomController');

router.get('/:id', classroomController.getClass);
// router.get('');

module.exports = router;
