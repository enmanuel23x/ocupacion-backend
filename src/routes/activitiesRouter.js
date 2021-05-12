const express = require('express');
const activitiesRouter = express.Router();
const activitiesController = require('../controller/activitiesController');

activitiesRouter.route('/')
    .get(activitiesController.getActivities)
    .delete(activitiesController.deleteActivitie)
    .post(activitiesController.editActivities);
activitiesRouter.route('/no_portafolio')
    .put(activitiesController.addNoportafolio);

module.exports = activitiesRouter;