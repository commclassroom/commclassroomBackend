/** load required packages */

/** load peer modules and services */
const Course = require('./course.schema');

/**
 * CourseService operates on the data layer of the application, and performs *all* db operations.
 *
 * UserService is consumed not only by CourseController, but also by controllers of other modules.
 */
class CourseService {
  /**
   * Fetch all user details
   * @returns Array<Course> list of users in the system
   */
  static async findAllCourses() {
    const userList = await Course.find({});
    return userList;
  }
}

module.exports = { CourseService };
