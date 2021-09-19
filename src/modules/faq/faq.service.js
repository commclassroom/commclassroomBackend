/** load required packages */

/** load peer modules and services */
const Faq = require('./faq.schema');

/**
 * UserService operates on the data layer of the application, and performs *all* db operations.
 *
 * UserService is consumed not only by UserController, but also by controllers of other modules.
 */
class FaqService {
  /**
   * Fetch all user details
   * @returns Array<User> list of users in the system
   */
  static async findAllFaqs() {
    const userList = await Faq.find({});
    return userList;
  }
}

module.exports = { FaqService };
