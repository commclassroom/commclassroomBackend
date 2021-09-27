const express = require('express');

/** load middlewares */
const cors = require('cors');
const { HttpExceptionTransformer } = require('http-exception-transformer');

/** load services */
const { initializeMongoDB } = require('./services/database');

/** load modules as routes */
const UserRoutes = require('./modules/user/user.routes');
const CourseRoutes = require('./modules/course/course.routes');

/** declare application and load middleware */
const app = express();
app.use(cors());
app.use(express.json());

/** use json parser and body parser*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** initialize services */
initializeMongoDB();

/** show alive status on server root */
app.get('/', (req, res) => {
  res.json({ alive: true });
});

/** bind all rooutes to application */
app.use('/user', UserRoutes);
app.use('/course', CourseRoutes);

/** transform all errors into standard messages */
app.use(HttpExceptionTransformer);

/** export application to be served or tested */
module.exports = { app };
