const express = require('express');
const { logger } = require('../../services/logger');
const router = express.Router();

/** load the service */
const { CourseController } = require('./course.controller');

/** to list all courses */
router.get('/', async (req, res) => {
  const courseList = await CourseController.getAllCourses();
  return res.json(courseList);
});

/** search for a course based on Title , category , countof enrolled students */

router.get('/search', async (req,res) => {
  const title = req.query.title;
  const category = req.query.category;
  const countofstudents = req.query.countofstudents;
  const filteredCourses= await CourseController.searchCourse(title , category , parseInt(countofstudents));
  return res.json(filteredCourses);
});

/**to get a course by id */
router.get('/:id', async (req, res) => {
  const course = await CourseController.getCourseById(req.params.id);
  console.log(req.params.id);
  return res.json(course);
});

/**to add a new course */
router.post('/new', async (req, res) => {
  const course = await CourseController.createCourse(req.body);
  return res.json(course).status(201);
});

/**update details of a course */
router.put('/update/:id', async (req, res) => {
  const course = await CourseController.updateCourse(req.params.id, req.body);
  return res.json(course);
});

/**delete a course */
router.delete('/delete/:id', async (req, res) => {
  const course = await CourseController.deleteCourse(req.params.id);
  return res.json(course);
});

/** export the routes to be binded to application */
module.exports = router;
