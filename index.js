require('dotenv').config();
require('rootpath')();
const app = require('./app')

const port = process.env.NODE_ENV === 'production' ? 80 : 2000;
const server = app.listen(port, function () {
    console.log(`Backend corriendo en localhost:${port}`);
});