const express = require('express');
const clockifyRouter = express.Router();
const clockifyController = require('../controller/clockifyController');

clockifyRouter.route('/clients')
    .get(clockifyController.getClients);
clockifyRouter.route('/projects/:id')
    .get(clockifyController.getProjects);
clockifyRouter.route('/tasks/:id')
    .get(clockifyController.getTasks);

module.exports = clockifyRouter;