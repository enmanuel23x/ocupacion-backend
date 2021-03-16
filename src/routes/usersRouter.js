const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controller/usersController');

usersRouter.route('/authenticate')
    .post(usersController.authenticate);
usersRouter.route('/:id')
    .get(usersController.getUser);

module.exports = usersRouter;