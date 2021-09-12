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
    instructors: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    course_rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    enrollements: {
      type: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          },
          rating: {
            type: Number,
            min: 1,
            max: 5,
          },
        },
      ],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: [],
    },
    playlistId: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', courseSchema);
