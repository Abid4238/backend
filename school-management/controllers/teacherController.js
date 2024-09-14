const teacherService = require('../services/teacherService');

exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await teacherService.getAllTeachers();
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTeacher = async (req, res) => {
    try {
        const teacher = await teacherService.createTeacher(req.body);
        res.status(201).json(teacher);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
