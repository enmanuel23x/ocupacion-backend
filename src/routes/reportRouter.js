const express = require('express');
const reportRouter = express.Router();
const reportController = require('../controller/reportController');

reportRouter.route('/1')
    .get(reportController.getReport1);
reportRouter.route('/2')
    .get(reportController.getReport2);
module.exports = reportRouter;