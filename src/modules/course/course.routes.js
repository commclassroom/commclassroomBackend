const express = require('express');

const router = express.Router();

/** load the service */
const { CourseController } = require('./course.controller');

/** to list all courses */
router.get('/', async (req, res) => {
  const userList = await CourseController.getAllCourses();
  return res.json(userList);
});

/**to add a new course */
router.post('/new', async (req, res) => {
  const course = await CourseController.createCourse(req.body);
  return res.json(course);
});
/** export the routes to be binded to application */
module.exports = router;
