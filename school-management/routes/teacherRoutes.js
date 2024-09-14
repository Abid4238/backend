const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.getAllTeachers);
router.post('/', teacherController.createTeacher);

module.exports = router;
