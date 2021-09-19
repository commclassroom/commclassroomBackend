/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { CourseService } = require('./course.service');

/**
 * CourseController contains definitions of all route handlers in /course namespace.
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
}

module.exports = { CourseController };
