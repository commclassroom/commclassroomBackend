const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of Course document here
 */

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  instructors: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  assistants: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  students: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  likes: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  reviews: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  faq: {
    type: [
      {
        question: String,
        answer: String,
        author: { type: Schema.Types.ObjectId, ref: 'User' },
      },
    ],
  },
});

module.exports = mongoose.model('Course', courseSchema);
