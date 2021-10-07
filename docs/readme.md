# Development Guide


# Entites 
Entities are "things" that we see in the project. For example - user, course, instructor, review, etc are all entities. Ideally all entities get a collection in the database.
 
## **User**
User (or student in our case) is anyone who "uses" or logs into the system in order to view the content and engage with it.

The following details are stored about the user:
- Personal details
  - email `string`
  - full name `string`
  - date of birth / year of birth `date`
  - gender `enum`
  - school / college / university name `string`
  - current education level - high school, under grad, grad, etc. `enum`
  - social accounts : `Array<{site: string, url:string}>`
  - profile photo `url`
- Details about account on platform
  - member since `date`
  - last logged in `date`
  - account status (blocked, suspended, verified, unverified) `enum`
  - account type (student, assistant, instructor, admin) `enum`
- Interation with entities
  - courses enrolled
    ```
    Array<{
      course: course.id, 
      enrolled: date,
      lastOpened: date,
      status : enum[enrolled, in progress, abondoned, completed]
      completeed: number
    }>
    ```
  - courses liked `Array<course.id>`
  - course assistant `Array<course.id>`
  - course teacher `Array<course.id>`
  - reviews `Array<review.id>`


## **Course**
Course is a sequential arrangement of **videos** on a similar context. Courses are just an abstraction of a collection of videos, so the schema is mainly metadata.

The following details are as follows:
- Course details
  - title
  - category (web dev, app dev, cloud native, soft skills, ...)
  - instructors `Array<user.id>`
  - assistants `Array<user.id>`
  - students `Array<user:id>`
  - total likes `array<user.id>`
  - reviews `array<review.id>`
  - faq 
  ```
  array<{
    question: string, 
    answer: string, 
    author: user.id
  }>```


## **Review**
Reviews are an important part of offerings, and are required for further analysis.

The following details are stored about a review
- Public data of a review
  - rating `number`
  - author `user.id`
  - date published `date`
  - for course `course.id`
  - status `enum[visible, featured, blocked]`
  - upvotes/found helpful `array<user.id>`


# Modules
Modules are stored in the `src/modules/<module.name>` directory.

## User Module
User module deals with everything related to a user / student / profile on the application.
- Routes
  - to get details of a user by id
  - to get details of a user by email
  - to create a new profile (name, email required)
  - to update the profile (all fields except email)
  - to request new verification email
  - to accept the URL from verification emails


## Course Module
Course modules does everything related to course on the application

- Routes
  - to list all the courses
    - allow filtering by name, rating, category, enrollment count
  - to add a new course
  - to delete a course
  - to update the details of a course
    - add new instructor 
    - add new assistant
    - add new video to course
    - reorder the videos 
    - update course meta data (description, duration, title etc)
  - list all reviews of a given course
  - to allow user to toggle like a course


## Review Module
Review module deals with everything related to reviews of a course

- Routes
  - to list all reviews by a user
  - to list all reviews of a course
  - to allow users to write a review for a course
  - to allow users to update their review for a course
  - to allow users to delete their review of a course
  - to allow users (admins) to moderate the reviews, i.e. change their status etc.





# References
- http://learnmongodbthehardway.com/schema/schemabasics/
