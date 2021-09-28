const express = require('express');

const router = express.Router();

/** load the service */
const { UserController } = require('./user.controller');

/** to list all users */
router.get('/', async (req, res) => {
  const userList = await UserController.getAllUsers();
  return res.json(userList);
});

/** to create a single new user */
router.post('/', async (req, res) => {
  // req.body contains the new User object sent from client
  const newUser = await UserController.createNewUser(req.body);
  return res.json(newUser);
});

/** to update user details */
router.patch('/', async (req, res) => {
  // req.body contains the User object with updated details from client
  const updatedUser = await UserController.updateUserDetails(req.body);
  return res.json(updatedUser);
});

/** export the routes to be binded to application */
module.exports = router;
