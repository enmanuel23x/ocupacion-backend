const config = require('config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    getUser
};

async function authenticate(req, res, next) {
    const { username, password } = req.body
    const user = users.find(u => u.username === username);

    if (!user){
        res.json({
            message: 'Username or password is incorrect'
        })
    }else{
        // create a jwt token that is valid for 7 days
        const token = jwt.sign({ sub: user.id }, config.secret);
        res.json({token})
    }

    
}

async function getUser(req, res, next) {
    const email = req.params.id
    if(email){
        models.users.findAll({
            include:
                [{
                    model: models.collaborators,
                    as: 'collaborators',
                    where: {
                        col_email: email
                    }
                }],
        }).then((users) => {
            res.status(200).json(users.length == 0 ? {} : users[0]);
        }, (err) => {
            console.dir(err);
            res.status(429).json("Error interno del servidor");
            next(err);
        }
        );
    }else{
        res.status(200).json({});
    }
}