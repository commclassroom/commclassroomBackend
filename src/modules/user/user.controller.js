/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { UserService } = require('./user.service');

/**
 * UserController contains definitions of all route handlers in /user namespace.
 */
class UserController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllUsers() {
    try {
      logger.info('[user]: listing all users');
      const userList = await UserService.findAllUsers();

      return userList;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  static async getUserById(id) {
    try {
      logger.info('[user]: listing user by given id');
      const user = await UserService.getUserById(id);

      return user;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  static async getUserByEmail(email) {
    try {
      logger.info('[user]: listing user by given email');
      const user = await UserService.getUserByEmail(email);
      return user;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { UserController };
