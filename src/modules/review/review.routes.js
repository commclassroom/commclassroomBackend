const express = require('express');

const router = express.Router();

/** load the service */
const { ReviewController } = require('./reveiw.controller');

/** to create a single new review */
router.post('/', async (req, res) => {
  // req.body contains the new Review object sent from client
  const newReview = await ReviewController.createNewReview(req.body);
  return res.json(newReview);
});

/** to update review details */
router.patch('/', async (req, res) => {
  // req.body contains the Review object with updated details from client
  const updatedReview = await ReviewController.updateReview(req.body);
  return res.json(updatedReview);
});

/** to update review details */
router.delete('/:id', async (req, res) => {
  // req.body contains the review object id to be deleted from client
  const removedReview = await ReviewController.removeReview(req.body.id);
  return res.json(removedReview);
});

/** to update review details */
router.get('/:userid', async (req, res) => {
  // req.body contains the User id from client
  const userReviews = await ReviewController.getReviewsByUserId(req.body.userid);
  return res.json(userReviews);
});

/** to get reviews with specified course details */
router.get('/:courseid', async (req, res) => {
  // req.body contains the course id from client
  const courseReviews = await ReviewController.courseReviews(req.body.courseid);
  return res.json(courseReviews);
});


/** export the routes to be binded to application */
module.exports = router;
