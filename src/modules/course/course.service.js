/** load required packages */
const { NotFoundException } = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const Course = require('./course.schema');

/**
 * CourseService operates on the data layer of the application, and performs *all* db operations.
 *
 * CourseService is consumed not only by CourseController, but also by controllers of other modules.
 */
class CourseService {
  /**
   * Function to calculate avg. rating from enrollments.
   * @param {Array<{user: objectId,rating: Number}>} enrollments - The students enrolled in the course.
   * @returns {number | undefined} - The average rating if possible else undefined
   */
  static getAvgRating(enrollments) {
    if (!enrollments) {
      return undefined;
    }
    // filtering all the enrollments with a rating.
    const enrollmentsWithRatings = enrollments.filter(
      (enrollments) => enrollments.rating,
    );
    const len = enrollmentsWithRatings.length;
    if (len === 0) {
      return undefined;
    }
    const sumofRatings = enrollmentsWithRatings.reduce((sum, enrollments) => {
      return sum + enrollments.rating;
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
   * Fetch a course by Id
   * @param {ObjectId} id - ObjectId of the course to get
   */
  static async findCourseById(id) {
    const course = await Course.findById(id);
    if (!course) {
      // course not found
      throw new NotFoundException();
    }
    return course;
  }

  /**
   * Create a course.
   * @param {object} courseObj - Object containing all the course attributes.
   * @param {string} courseObj.title - The title of the course.
   * @param {Array<{name : string}>} courseObj.instructors - The instuctors of the course.
   * @param {Array<{user: objectId,rating: Number}>} courseObj.enrollments - The students enrolled in the course.
   * @param {bool} courseObj.featured - Is the course featured
   * @param {Array<string>} courseObj.tags - Tags related to the course
   * @param {string} courseObj.playlistId - YouTube playlist id
   */
  static async createNewCourse(courseObj) {
    const course_rating = this.getAvgRating(courseObj.enrollments);
    const course = new Course({
      ...courseObj,
      course_rating,
    });
    const savedCourse = await course.save();
    return savedCourse;
  }

  /**
   * Update a course.
   * @param {object} courseObj - Object containing all the course attributes.
   * @param {string} courseObj.title - The title of the course.
   * @param {Array<{name : string}>} courseObj.instructors - The instuctors of the course.
   * @param {Array<{user: objectId,rating: Number}>} courseObj.enrollments - The students enrolled in the course.
   * @param {bool} courseObj.featured - Is the course featured
   * @param {Array<string>} courseObj.tags - Tags related to the course
   * @param {string} courseObj.playlistId - YouTube playlist id
   */
  static async updateCourse(id, courseObj) {
    const course_rating = this.getAvgRating(courseObj.enrollments);
    const savedCourse = await Course.findByIdAndUpdate(
      id,
      {
        ...courseObj,
        course_rating,
      },
      {
        new: true,
      },
    );
    if (savedCourse === null) {
      // course not found
      throw new NotFoundException();
    }
    return savedCourse;
  }

  /**
   * Delete a course by Id
   * @param {ObjectId} id - ObjectId of the course to delete
   * @returns {Course | null} returns Course if delete successful else null
   */
  static async deleteCourse(id) {
    const deletedCourse = await Course.findByIdAndDelete(id);
    return deletedCourse;
  }
}

module.exports = { CourseService };
