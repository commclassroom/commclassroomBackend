const mongoose = require('mongoose');
const CourseSchema = require('../course/course.schema');

const { Schema } = mongoose;
require('mongoose-type-email');

// SUPPORTING TYPES
const Gender = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
};
Object.freeze(Gender);
const EducationLevel = {
  HIGH_SCHOOL: 1,
  UNDER_GRAD: 2,
  GRAD: 3,
};
Object.freeze(EducationLevel);
const AcccountStatus = {
  BLOCKED: 1,
  SUSPENDED: 2,
  UNVERIFIED: 3,
  VERIFIED: 4,
};
Object.freeze(EducationLevel);
const AccountType = {
  STUDENT: 1,
  ASSISTANT: 2,
  ADMIN: 3,
  INSTRUCTOR: 4,
};
Object.freeze(EducationLevel);
const CourseStatus = {
  IN_PROGRESS: 1,
  ABONDONED: 2,
  ENROLLED: 3,
  COMPLETED: 4,
};
Object.freeze(CourseStatus);
const course = CourseSchema;
/**
 * Define the structure of User document here
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    correctTld: true,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: Gender,
  },
  school: {
    type: String,
  },
  currentEducationLevel: {
    type: EducationLevel,
  },
  socialAccounts: [
    {
      site: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  profileImage: {
    type: String,
  },

  // Details about account on platform
  memberSince: {
    type: Date,
  },
  lastLoggedIn: {
    type: Date,
  },
  accountStatus: {
    type: AcccountStatus,
  },
  accountType: {
    type: AccountType,
  },

  courses: {
    type: [
      {
        course: course.id,
        enrolled: Date,
        lastOpened: Date,
        status: CourseStatus,
        completeed: Number,

      },
    ],
  },
});

module.exports = mongoose.model('User', userSchema);
