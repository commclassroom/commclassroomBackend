const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');
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
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHER'],
  },
  school: {
    type: String,
  },
  currentEducationLevel: {
    type: String,
    enum: ['HIGH_SCHOOL', 'UNDER_GRAD', 'GRAD'],
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
    type: String,
    enum: ['BLOCKED', 'SUSPENDED', 'UNVERIFIED', 'VERIFIED'],
  },
  accountType: {
    type: String,
    enum: ['STUDENT', 'ASSISTANT', 'ADMIN', 'INSTRUCTOR'],
  },

  courses: {
    type: [
      {
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
        enrolled: Date,
        lastOpened: Date,
        status: {
          type: String,
          enum: ['IN_PROGRESS', 'ABONDONED', 'ENROLLED', 'COMPLETED'],
        },
        completed: Number,
      },
    ],
  },
});

module.exports = mongoose.model('User', userSchema);
