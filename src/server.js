const config = require('config');
const { app } = require('./app');
const { logger } = require('./services/logger');

// const PORT = config.get('app.port');

app.listen(3000, () => {
  logger.info(`Server listening on http://localhost:${3000}`);
});
