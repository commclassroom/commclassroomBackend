const mongoose = require('mongoose');

const { Schema } = mongoose;
require('mongoose-type-email');

/**
 * Define the structure of User document here
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    correctTld: true,
  },
});

module.exports = mongoose.model('User', userSchema);
