/** load required packages */

/** load peer modules and services */
const Video = require('./video.schema');

/**
 * VideoService operates on the data layer of the application, and performs *all* db operations.
 *
 * VideoService is consumed not only by UserController, but also by controllers of other modules.
 */
class VideoService {
  /**
   * Fetch all user details
   * @returns Array<Video> list of users in the system
   */
  static async findAllVideos() {
    const videoList = await Video.find({});
    return videoList;
  }
}

module.exports = { VideoService };
