const express = require('express');
const filtersRouter = express.Router();
const clockifyRouter = require('./clockifyRouter')
const filtersController = require('../controller/filtersController');

filtersRouter.use('/clockify', clockifyRouter)
filtersRouter.route('/clients')
    .get(filtersController.getClients);
filtersRouter.route('/activities')
    .get(filtersController.getActivities);
filtersRouter.route('/collaborators')
    .get(filtersController.getCollaborators);
module.exports = filtersRouter;