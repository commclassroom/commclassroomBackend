const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of Faq document here
 */
const faqSchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

module.exports = mongoose.model('faq', faqSchema);
