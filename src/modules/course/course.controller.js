/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { CourseService } = require('./course.service');

/**
 * UserController contains definitions of all route handlers in /user namespace.
 */
class CourseController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllCourses() {
    try {
      logger.info('[course]: listing all courses');
      const userList = await CourseService.findAllCourses();

      return userList;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  /**
   * @param {object} - An object having all required attributes.
   */
  static async createCourse(obj) {
    try {
      logger.info('[course]: create new course');
      let { title, instructors, enrollements, featured, tags } = obj;
      const course = await CourseService.createNewCourse(
        title,
        instructors,
        enrollements,
        featured,
        tags,
      );

      return course;
    } catch (e) {
      logger.error('[course]: ' + e);
      throw new InternalServerException();
    }
  }
}

module.exports = { CourseController };
