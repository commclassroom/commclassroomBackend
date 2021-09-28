/** load required packages */

/** load peer modules and services */
const Review = require('./review.schema');

/**
 * ReviewService operates on the data layer of the application, and performs *all* db operations.
 *
 * ReviewService is consumed not only by ReviewController, but also by controllers of other modules.
 */
class ReviewService {
  /**
   * Fetch all Review of a specified courser with id 
   * @returns Array<Review> list of Reviews in the system
   */
  static async getCourseReviews(id) {
    const reviewList = await Review.find({course:id});
    return reviewList;
  }

  /**
   * Create new Review entry
   * @param reviewObj object on which a new review will be created.
   * @returns Review object newly created
   */
  static async createNewReview(reviewObj) {
    const newReview = await Review.create(reviewObj);
    return newReview;
  }
  /**
   * Update a Review document
   * @param  updatedReviewObj 
   * @returns review object which is updated
   */
  static async updateReview(updatedReviewObj) {
    const updatedReview = await Review.findByIdAndUpdate(
      updatedReviewObj._id,
      updatedReviewObj
    );

    return updatedReview;
  }
  /**
   * Remove a particular review by id
   * @param id id of the review to be deleted
   * @returns Object<Review> Object which is deleted.
   */

  static async removeReview(id) {
    let removedReview = await Review.remove({ _id: id });
    return removedReview;
  }
  /**
   * Fetch a particular usr details by id
   * @param id user id
   * @returns Array<Review> Array of review of user with specified id.
   */

  static async getReviewsByUserId(userId) {
    const reviews = await Review.find({ author : userId });
    return reviews;
  }
}

module.exports = { ReviewService };
