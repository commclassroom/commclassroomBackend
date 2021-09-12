/** load required packages */

/** load peer modules and services */
const Course = require('./course.schema');

/**
 * CourseService operates on the data layer of the application, and performs *all* db operations.
 *
 * CourseService is consumed not only by CourseController, but also by controllers of other modules.
 */
class CourseService {
  /**
   * Function to calculate avg. rating from enrollements.
   * @param {Array<{user: objectId,rating: Number}>} enrollements - The students enrolled in the course.
   * @returns {number | undefined} - The average rating if possible else undefined
   */
  static getAvgRating(enrollements) {
    if (!enrollements) {
      return undefined;
    }
    const enrollementsWithRatings = enrollements.filter(
      (enrollement) => enrollement.rating,
    );
    const len = enrollementsWithRatings.length;
    if (len === 0) {
      return undefined;
    }
    const sumofRatings = enrollementsWithRatings.reduce((sum, enrollement) => {
      return sum + enrollement.rating;
    }, 0);

    return sumofRatings / len;
  }

  /**
   * Fetch all course details
   * @returns {Array<Course>} list of courses in the system
   */
  static async findAllCourses() {
    const CourseList = await Course.find({});
    return CourseList;
  }

  /**
   * Create a course.
   * @param {string} title - The title of the course.
   * @param {Array<{name : string}>} instructors - The instuctors of the course.
   * @param {Array<{user: objectId,rating: Number}>} enrollements - The students enrolled in the course.
   * @param {bool} featured - Is the course featured
   * @param {Array<string>} tags - Tags related to the course
   */
  static async createNewCourse(
    title,
    instructors,
    enrollements,
    featured,
    tags,
  ) {
    const course = new Course();
    course.title = title;
    course.instructors = instructors;
    course.enrollements = enrollements;
    course.course_rating = this.getAvgRating(course.enrollements);
    course.featured = featured || false;
    course.tags = tags;
    return course.save();
  }
}

module.exports = { CourseService };
