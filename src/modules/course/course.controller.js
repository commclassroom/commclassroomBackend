const {
     NotFoundException,
  } = require('http-exception-transformer/exceptions');

/** load peer modules and services */  
const { logger } = require('../../services/logger');
const { courseService } = require('./course.service');

/**
 * CourseController contains definitions of all route handlers in /course namespace.
 */

class CourseController{

    /**
   * @param {String} title - Title of the course.
   * @param {[Schema.Types.ObjectId]} instructors - Array of Instructors.
   */

    static async searchCourse(title, instructors){
        try{

            logger.info("list of courses based on search");
            const courses = await courseService.findCourses(title, instructors); 

            return courses;
        }
        catch(e){

            logger.error('[course]: ' + e);
            throw new NotFoundException();
        }
    }
}

module.exports = { CourseController };