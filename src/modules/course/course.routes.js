const express = require('express');

const router = express.Router();

/** load the service */
const { CourseController } = require('./course.controller');

/** to list all courses */
router.get('/', async (req, res) => {
  const courseList = await CourseController.getAllCourses();
  return res.json(courseList);
});

/** export the routes to be binded to application */
module.exports = router;
