require('dotenv').config();
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

//const
const version = '/v1';

// api routes
app.use(version+'/users', require('./src/routes/usersRouter'));
app.use(version+'/activities', require('./src/routes/activitiesRouter'));
app.use(version+'/filters', require('./src/routes/filtersRouter'));
// global error handler
app.use(errorHandler);

module.exports = app