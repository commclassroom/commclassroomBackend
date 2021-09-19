const express = require('express');

const router = express.Router();

/** load the service */
const { VideoController } = require('./video.controller');

/** to list all videos */
router.get('/', async (req, res) => {
  const videoList = await VideoController.getAllVideos();
  return res.json(videoList);
});

/** export the routes to be binded to application */
module.exports = router;
