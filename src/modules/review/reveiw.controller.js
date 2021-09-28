/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { ReviewService } = require('./review.service');

/**
 * ReviewController contains definitions of all route handlers in /review namespace.
 */
class ReviewController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllReviews() {
    try {
      logger.info('[review]: listing all reviews');
      const reviewList = await ReviewService.findAllReviews();
      return reviewList;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  static async createNewReview(newReviewObj) {
    try {
      logger.info('[review]: creating new review entry');
      const newReview = await ReviewService.createNewReview(newReviewObj);

      return newReview;
    } catch (e) {
      throw new InternalServerException();
    }
  }

  static async updateReviewDetails(updatedReviewObj) {
    try {
      logger.info('[review]: updating review details');
      const updateReview = await ReviewService.updateReview(updatedReviewObj);

      return updatedReview;
    } catch (e) {
      throw new InternalServerException();
    }
  }
  static async removeReview(id) {
    try {
      logger.info('[review]: removing review');
      const removedReview = await ReviewService.removeReview(id);
      return removedReview;
    } catch (e) {
      throw new InternalServerException();
    }
  }
  static async userReviews(id) {
    try {
      logger.info('[review]: listing user reviews');
      const UserReviews = await ReviewService.getReviewsByUserId(id);

      return UserReviews;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { ReviewController };
