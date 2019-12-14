const express = require('express');
const router = express.Router();
const studentRoute = require('./routes/students');
const courseRoute = require('./routes/courses');
const userRoute = require('./routes/users');

router.use('/students', studentRoute);
router.use('/courses', courseRoute);
router.use('/users', userRoute);

module.exports = router;