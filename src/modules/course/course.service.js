/** load required packages */
const { NotFoundException } = require('http-exception-transformer/exceptions');
const { logger } = require('../../services/logger');

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

   /**
   * Search course by title (internal function)git l
   * @param {String} title - search for a course/courses which match with the title
   */
  static async searchCourseByTitle(title) {
    let courses = await this.findAllCourses(); //fetch all courses
    const filteredCourses = await courses.filter( (course) =>{
      return course.title.includes(title) === true;
    });
    return filteredCourses;
  }

 /**
   * Search course by numberofenrolledstudents (Internal function)
   * @param {BigInteger} countofstudents - search for a course/courses having count of students that match with the number of students entered
   */

  static async searchCourseByCountOfStudentsEnrolled(countofstudents) {
    const courses =  await this.findAllCourses(); //fetch all courses
    
    const filteredCourses =await courses.filter( (course) =>{
      return course.students.length === countofstudents ;
    });
    if(filteredCourses === null)
    return null;
    return filteredCourses;
  }
   /**
   * Fetch courses based on title category and count 
   * @param {String} title - title of the course
   * @param {String} Category - Category of the course
   * @param {BigInteger} countofstudents - number of students enrolled in the course
   * */

  static async searchCourses(title,category,countofstudents){

    const coursesByTitle = await this.searchCourseByTitle(title);
    const coursesByCountOfStudents = await this.searchCourseByCountOfStudentsEnrolled(countofstudents);
    let filteredCourses;
    // if there are no courses matching given title
    if(title === 'null' )
    { 
       // if there are no courses matching given category: filter by no of students
       if( category === 'null'){
        return res.json(coursesByCountOfStudents);
      }
      // if there are no courses matching with no of students as given no of students: filter by categor
      //filter by both category and students
      else{
       filteredCourses = coursesByCountOfStudents.filter( (course) =>{
          return  course.category === category ;
        });
      }
    }
    // if there are courses matching with given title
    else
    {
      
      // if there are courses matching given category too then filter based on category
      if(category !== 'null')
      {
       
          filteredCourses = coursesByTitle.filter (course => {
            return course.category === category;
          });
         
          //filter based on countofstudents too if it's not null
         
             filteredCourses = filteredCourses.filter( course => {
                return course.students.length === countofstudents;
              });
          
      }
      // if there are no courses matching given category just filter coursesbytitle by countofstudents
      else  {
       
        filteredCourses = coursesByTitle.filter (course => {
          return course.students.length === countofstudents ;
        });
      }
      }
    return filteredCourses;
  }
}

module.exports = { CourseService };
