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
   * Create new user entry
   * @returns User object newly created
   */
  static async createNewUser(newUserObj) {
    const newUser = await User.create(newUserObj);
    return newUser;
  }
}

module.exports = { UserService };
