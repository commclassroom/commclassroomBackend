const mongoose = require('mongoose');
const UserSchema = require('../user/user.schema');
const ReviewSchema = require('../review/review.schema');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of User document here
 */

const user = new UserSchema();
const review = new ReviewSchema();
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: [user.id],
  },
  assistants: {
    type: [user.id],
  },
  students: {
    type: [user.id],
  },
  totalLikes: {
    type: [user.id],
  },
  reviews: {
    type: [review.id],
  },
  faq: {
    type: [
      {
        question: String,
        answer: String,
        author: user.id,
      },
    ],
  },
});

module.exports = mongoose.model('Course', courseSchema);
