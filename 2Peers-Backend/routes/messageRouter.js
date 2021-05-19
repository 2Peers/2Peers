const express = require('express');

const router = express.Router();
const studentController = require('../controllers/studentController');
// route to post a new message from a student
router.get('/:id', studentController.getMessage);
router.get('/:id/rating', studentController.getAvgMessageRatings);
router.patch('/:id', studentController.patchMessage);
router.patch('/:id/rating', studentController.patchMessageRating);
router.delete('/:id', studentController.deleteMessage);
router.post('/:id', studentController.addRating);

module.exports = router;
