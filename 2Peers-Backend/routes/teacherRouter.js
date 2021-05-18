const express = require('express');

const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/:id', teacherController.getTeacherById);
router.get('/:id/classes', teacherController.getClasses);
router.post('/:id/classes', teacherController.createClass);

module.exports = router;
