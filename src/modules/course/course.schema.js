const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of User document here
 */
const courseSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  videos: {
    type: [String],
  },
  instructor: {
    type: String,
  },
  thumbnail: {
    type: [String],
  },
  popularity: {
    type: Number,
  },
});

module.exports = mongoose.model('User', courseSchema);
