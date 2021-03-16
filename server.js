require('dotenv').config();
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

//const
const version = '/v1';

// api routes
app.use(version+'/users', require('./src/routes/usersRouter'));
app.use(version+'/no_portafolio/', require('./src/routes/occupationRouter'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 2000;
const server = app.listen(port, function () {
    console.log(`Backend corriendo en localhost:${port}`);
});
