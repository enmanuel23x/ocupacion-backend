require('dotenv').config();
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const CronJob = require('cron').CronJob;
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const runSync = require('./src/utils/updater').runSync;


const job = new CronJob('00 00 01 * * 3', async function() {
    const result = await runSync();
    console.log(result)
});
job.start()

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

app.use(version+'/no_portafolio/', require('./src/routes/occupationRouter'));
app.use(version+'/reports/', require('./src/routes/reportRouter'));


// global error handler
app.use(errorHandler);

module.exports = app
