const express = require('express');
const usersRouter = express.Router();
const occupationController = require('../controller/occupationController');


// Create
usersRouter.route('/occupation')
    .post(occupationController.create);

// Read
// All
usersRouter.route('/occupation')
    .get(occupationController.readAll);

// By id
usersRouter.route('/occupation/id/:id')
    .get(occupationController.readById);


// Update
usersRouter.route('/occupation')
    .put(occupationController.update);

// Delete
usersRouter.route('/occupation/:id')
    .delete(occupationController.delete);



module.exports = usersRouter;
