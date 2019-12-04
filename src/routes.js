const express = require('express');
const router = express.Router();
const studentRoute = require('./routes/students');
const courseRoute = require('./routes/courses');

router.use('/students', studentRoute);
router.use('/courses', courseRoute);

module.exports = router;