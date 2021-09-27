const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * Define the structure of Course document here
 */
const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: String,
    instructors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    assistants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    faq: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
        author: {
          type: Schema.Types.ObjectId,
          ref: 'Review',
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', courseSchema);
