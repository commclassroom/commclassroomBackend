/** load required packages */
const {
  InternalServerException,
  BadRequestException,
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
   * @param {ObjectId} id - ObjectId of the course to get
   */
  static async getCourseById(id) {
    if (!id) {
      throw new BadRequestException();
    }
    try {
      logger.info('[course]: get course no. ' + id);
      const course = await CourseService.findCourseById(id);

      return course;
    } catch (e) {
      logger.error('[course]: ' + e);
      throw new InternalServerException();
    }
  }

  /**
   * @param {object} courseObj - An object having all required course attributes.
   */
  static async createCourse(courseObj) {
    try {
      logger.info('[course]: create new course');
      const course = await CourseService.createNewCourse(courseObj);

      return course;
    } catch (e) {
      logger.error('[course]: ' + e);
      throw new InternalServerException();
    }
  }

  /**
   * @param {ObjectId} id - ObjectId of the course to update
   * @param {object} courseObj - An object having all required attributes.
   */
  static async updateCourse(id, courseObj) {
    if (!id) {
      throw new BadRequestException();
    }
    try {
      logger.info('[course]: update course no. ' + id);
      const course = await CourseService.updateCourse(id, courseObj);

      return course;
    } catch (e) {
      logger.error('[course]: ' + e);
      throw new InternalServerException();
    }
  }

  /**
   * @param {ObjectId} id - ObjectId of the course to delete
   */
  static async deleteCourse(id) {
    if (!id) {
      throw new BadRequestException();
    }
    try {
      logger.info('[course]: delete course no. ' + id);
      const course = await CourseService.deleteCourse(id);

      return course;
    } catch (e) {
      logger.error('[course]: ' + e);
      throw new InternalServerException();
    }
  }

  /**
   * @param {String} title - title of the course
   * @param {String} Category - Category of the course
   * @param {BigInteger} countofstudents - number of students enrolled in the course
   * */

    static async searchCourse(title , category , countofstudents){
      if(title === null && category === null && countofstudents === 0){
        logger.info("searching for courses returned null since given parameters are empty");
        return null;
      }
      try{         
          logger.info("searching for courses having title: "+ title +" belonging to category: "+category +" having enrolled no of students as: "+countofstudents);
          const courses = await CourseService.searchCourses(title , category ,countofstudents);
        
          return courses;
      }
      catch(e){
        throw new InternalServerException();
      }
    }

}

module.exports = { CourseController };
