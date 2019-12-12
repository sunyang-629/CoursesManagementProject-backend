const Course = require("./../models/course");

async function addCourse(req, res) {
    const { name, code, description } = req.body;
    const course = new Course({
        _id: code,
        name,
        description
    });
    await course.save();
    return res.json(course);
};

async function getCourse(req, res) {
    const { id: code } = req.params;
    const course = await Course.findById(code).exec();
    if (!course) {
        return res.status(404).json('course not found');
    }
    return res.json(course);
 };

async function getAllCourses(req, res) { 
    const courses = await Course.find().exec();
    return res.json(courses)
};

async function updateCourse(req, res) {
    const { id: code } = req.params;
    const { name, description } = req.body;
    const newCourse = await Course.findByIdAndUpdate(
        code,
        { name, description },
        { new: true })
        .exec();
    if (!newCourse) {
        return res.status(404).json("course not found");
    }
    return res.json(newCourse);
 };

async function deleteCourse(req, res) {
    const { id: code } = req.params;
    const course = await Course.findByIdAndDelete(code).exec();
    if (!course) {
        return res.status(404), json("course not found");
    }
    return res.sendStatus(200);
 };

module.exports = {
    addCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse
}