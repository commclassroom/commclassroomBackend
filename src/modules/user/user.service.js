/** load required packages */

/** load peer modules and services */
const User = require('./user.schema');

/**
 * UserService operates on the data layer of the application, and performs *all* db operations.
 *
 * UserService is consumed not only by UserController, but also by controllers of other modules.
 */
class UserService {
  /**
   * Fetch all user details
   * @returns Array<User> list of users in the system
   */
  static async findAllUsers() {
    const userList = await User.find({});
    return userList;
  }
  /**
   * Fetch a particular usr details by id
   * @param email user email
   * @returns Object<User> Object of properties of user.
   */

  static async getUserByEmail(userEmail) {
    const user = await User.find({ email: userEmail });
    return user;
  }
  /**
   * Fetch a particular usr details by id
   * @param id user id
   * @returns Object<User> Object of properties of user.
   */

  static async getUserById(userId) {
    const user = await User.find({ _id: userId });
    return user;
  }
}

module.exports = { UserService };
