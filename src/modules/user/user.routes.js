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
  const newUser = await UserController.createNewUser(req.body); //req.body contains the User object sent from client side
  return res.json(newUser);
});

/** export the routes to be binded to application */
module.exports = router;
