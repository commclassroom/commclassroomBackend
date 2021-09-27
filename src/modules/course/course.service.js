/** load required packages */

const { NotFoundException } = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const Course = require('./course.schema.js');

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
      * Internal function to fetch all instructors
   * @returns {Array<Course>} list of instructors in the system
   */
    static async availableInstructors() {
        const courseList = this.findAllCourses();
        let instructors;
        instructors = instructors + courseList.map( (course)=>{
           return course.instructors ;
        })
    }

    /**
     * Search for a course
   * @param {String} title - Title of the course.
   * @param {[Schema.Types.ObjectId],const ref = useRef(user)} instructors - Array of Instructors.
   */



    static async findCourses(title, instructors) {

        const courses = this.findAllCourses(); // fetch all courses
        const availableInstructors = this.findAllInstructors(); //fetch all instructors
        const filteredCourses;
        //perform checks

        if(title == null && (instructors == null || instructors.length <=0 )) {
            
            return NotFoundException;
        }

        if(title != null && title.length > 0){

            filteredCourses = courses.filter ( (course) => {
                
               return course.title === title ;
            });
        
        if(instructors != null && instructors.length > 0)
        {
            filteredCourses = courses.filter ( (course) => {
                const givenInstructors = course.instructors;
                return givenInstructors.some( (instructor ) => availableInstructors.includes(instructor));
            })
        }
          


    }
}
}
module.exports = {CourseService} ;