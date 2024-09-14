const Teacher = require('../models/teacher');

exports.getAllTeachers = async () => {
    return await Teacher.find();
};

exports.createTeacher = async (teacherData) => {
    const teacher = new Teacher(teacherData);
    return await teacher.save();
};
