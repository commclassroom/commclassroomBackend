const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of Video document here
 */
const videoSchema = new Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  faqs: {
    type: [String],
  },
});

module.exports = mongoose.model('Video', videoSchema);
