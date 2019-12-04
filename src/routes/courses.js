const {
    addCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse
} = require('./../controller/courses');
const express = require('express');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getCourse);
router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;