/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { VideoService } = require('./video.service');

/**
 * UserController contains definitions of all route handlers in /user namespace.
 */
class VideoController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllVideos() {
    try {
      logger.info('[user]: listing all users');
      const videoList = await VideoService.findAllVideos();
      return videoList;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { VideoController };
