const express = require('express');

const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/:id', teacherController.getTeacherById);
router.get('/:id/classes', teacherController.getClasses);
router.patch('/:id', teacherController.patchUser);
router.patch('/:id/message', teacherController.patchMessage);
router.patch('/:id/rating', teacherController.patchRating);
router.post('/:id/rating', teacherController.postRating);
router.post('/:id/exists', teacherController.getMessageRating);
router.post('/:id/message', teacherController.postMessage);
router.post('/:id/classes', teacherController.createClass);
router.delete('/:id', teacherController.deleteUser);

module.exports = router;
