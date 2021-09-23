const mongoose = require('mongoose');
const UserSchema = require('../user/user.schema');
const ReviewSchema = require('../review/review.schema');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of Course document here
 */

const user = UserSchema;
const review = ReviewSchema;
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
