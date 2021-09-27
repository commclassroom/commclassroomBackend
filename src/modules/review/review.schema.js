const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of Review document here
 */

const reviewSchema = new Schema({
  rating: {
    type: Number,
  },
  author: {
    type: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  date: {
    type: Date,
  },
  course: {
    type: { type: Schema.Types.ObjectId, ref: 'Course' },
  },
  status: {
    type: String,
    enum: ['VISIBLE', 'FEATURED', 'BLOCKED'],
  },
  likes: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
});

module.exports = mongoose.model('Review', reviewSchema);
