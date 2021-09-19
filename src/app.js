const express = require('express');

/** load middlewares */
const cors = require('cors');
const { HttpExceptionTransformer } = require('http-exception-transformer');

/** load services */
const { initializeMongoDB } = require('./services/database');

/** load modules as routes */
const UserRoutes = require('./modules/user/user.routes');
const VideoRoutes = require('./modules/video/video.routes');
const FaqRoutes = require('./modules/faq/faq.routes');
const CourseRoutes = require('./modules/course/course.routes');

/** declare application and load middleware */
const app = express();
app.use(cors());

/** initialize services */
initializeMongoDB();

/** show alive status on server root */
app.get('/', (req, res) => {
  res.json({ alive: true });
});

/** bind all rooutes to application */
app.use('/user', UserRoutes);
app.use('/video', VideoRoutes);
app.use('/faqs', FaqRoutes);
app.use('/course', CourseRoutes);

/** transform all errors into standard messages */
app.use(HttpExceptionTransformer);

/** export application to be served or tested */
module.exports = { app };
