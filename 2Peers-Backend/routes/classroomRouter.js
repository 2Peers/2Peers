const express = require('express');

const router = express.Router();
const classroomController = require('../controllers/classroomController');

router.get('/:id', classroomController.getClass);
router.get('/:id/members', classroomController.getClassMembers);
router.get('/:id/messages', classroomController.getClassMessages);

module.exports = router;
