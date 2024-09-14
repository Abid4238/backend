const studentService = require('../services/studentService');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
