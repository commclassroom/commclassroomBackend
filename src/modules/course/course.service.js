/** load required packages */

/** load peer modules and services */
const Course = require('./course.schema');

/**
 * UserService operates on the data layer of the application, and performs *all* db operations.
 *
 * UserService is consumed not only by UserController, but also by controllers of other modules.
 */
class CourseService {
  /**
   * Fetch all user details
   * @returns Array<User> list of users in the system
   */
  static async findAllCourses() {
    const userList = await Course.find({});
    return userList;
  }
}

module.exports = { CourseService };
