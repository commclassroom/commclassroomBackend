const express = require('express');

const router = express.Router();

/** load the service */
const { UserController } = require('./user.controller');

/** to list all users */
router.get('/', async (req, res) => {
  const userList = await UserController.getAllUsers();
  return res.json(userList);
});

/** to list users by id */
router.get('/:id', async (req, res) => {
  const user = await UserController.getUserById(req.params.id);
  return res.json(user);
});
/** to list users by id */
router.post('/', async (req, res) => {
  const user = await UserController.getUserByEmail(req.params.id);
  return res.json(user);
});
/** to list users by id */

/** export the routes to be binded to application */
module.exports = router;
