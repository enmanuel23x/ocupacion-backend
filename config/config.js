const fs = require('fs');

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT,
        "logging": false

    },
    "qa": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT,
        "logging": false
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT,
        "logging": false
    }
};
