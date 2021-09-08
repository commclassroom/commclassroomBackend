const config = require('config');
const mongoose = require('mongoose');
const { logger } = require('../logger');

const databaseConfigurations = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * Initializes MongoDB connection using configs and logs status
 */
const initializeMongoDB = () => {
  console.log(config.has('database.string'));
  // console.log(config.get('database.string'))
  mongoose.connect(
    config.get('database.string'),
    databaseConfigurations,
    (err) => {
      if (err) {
        logger.error(err);
        logger.error('connection.mongodb.failed');
      } else {
        logger.info('connection.mongodb.successful');
      }
    },
  );
};

module.exports = { initializeMongoDB };
