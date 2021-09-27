const express = require('express');

const router = express.Router();

/** Load the Controller */

const {courseController} = require('./course.controller.js');

router.post('/search/:courseName.:rating.:enrollments.:featured.:tags', async (req,res) => {
    const courses=await courseController.searchCourse(req.params.courseName,req.params.rating,req.params.enrollments,req.params.featured,req.params.tags);
    return res.json(courses).status(200);
});

module.exports = router;