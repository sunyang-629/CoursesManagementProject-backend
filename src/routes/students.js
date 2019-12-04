const {
    addStudent,
    getStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} = require("./../controller/students");
const express = require("express");
const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;