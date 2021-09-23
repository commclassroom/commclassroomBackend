const mongoose = require('mongoose');
const CourseSchema = require('../course/course.schema');
const UserSchema = require('../user/user.schema');

const { Schema } = mongoose;
require('mongoose-type-email');

const status = {
  VISIBLE: 1,
  FEATURED: 2,
  BLOCKED: 3,
};
Object.freeze(status);
/**
 * Define the structure of Review document here
 */

const user = UserSchema;
const course = CourseSchema;
const reviewSchema = new Schema({
  rating: {
    type: Number,
  },
  author: {
    type: user.id,
  },
  date: {
    type: Date,
  },
  course: {
    type: course.id,
  },
  status: {
    type: status,
  },
  upvotes: {
    type: [
      user.id,
    ],
  },
});

module.exports = mongoose.model('Review', reviewSchema);
