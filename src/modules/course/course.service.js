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
    if (course === null) {
      // course not found
      throw new NotFoundException();
    }
    return course;
  }

  /**
   * Create a course.
   * @param {object} courseObj - Object containing all the course attributes.
   * @param {string} courseObj.title - The title of the course.
   * @param {string} courseObj.category - The category of the course.
   * @param {Array< User.ObjectId >} courseObj.instructors - The ids of the instuctor users.
   * @param {Array< User.ObjectId >} courseObj.assistants - The ids of assistant users.
   * @param {Array< User.ObjectId >} courseObj.students - The ids of students enrolled in the course.
   * @param {Array< User.ObjectId >} courseObj.totalLikes - The ids of students that liked the course.
   * @param {Array< Reviews.ObjectId >} courseObj.reviews - The ids of the course reviews.
   * @param {Array<{question: String,answer: String, author: User.ObjectId}>} courseObj.faq - The faqs related to the course.
   */
  static async createNewCourse(courseObj) {
    const course = new Course(courseObj);

    const savedCourse = await course.save();
    return savedCourse;
  }

  /**
   * Update a course.
   * @param {object} courseObj - Object containing all the course attributes.
   * @param {string} courseObj.title - The title of the course.
   * @param {string} courseObj.category - The category of the course.
   * @param {Array< User.ObjectId >} courseObj.instructors - The ids of the instuctor users.
   * @param {Array< User.ObjectId >} courseObj.assistants - The ids of assistant users.
   * @param {Array< User.ObjectId >} courseObj.students - The ids of students enrolled in the course.
   * @param {Array< User.ObjectId >} courseObj.totalLikes - The ids of students that liked the course.
   * @param {Array< Reviews.ObjectId >} courseObj.reviews - The ids of the course reviews.
   * @param {Array<{question: String,answer: String, author: User.ObjectId}>} courseObj.faq - The faqs related to the course.
   */
  static async updateCourse(id, courseObj) {
    const savedCourse = await Course.findByIdAndUpdate(id, courseObj, {
      new: true,
    });
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
