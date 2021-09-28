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

  static async createNewUser(newUserObj) {
    try {
      logger.info('[user]: creating new user entry');
      const newUser = await UserService.createNewUser(newUserObj);

      return newUser;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  static async updateUserDetails(updatedUserObj) {
    try {
      logger.info('[user]: updating user details');
      const updatedUser = await UserService.updateUser(updatedUserObj);

      return updatedUser;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { UserController };
