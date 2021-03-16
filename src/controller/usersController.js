const config = require('config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    authenticate: (req, res, next) => {
        const { email } = req.body
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
                let user = users.length > 0 ? users[0] : undefined
                if (!user){
                    res.json({message: 'Correo no registrado'})
                }else{
                    const token = jwt.sign({ sub: user.usr_id }, config.secret);
                    res.json({user, token})
                }
            }, (err) => {
                console.dir(err);
                res.status(429).json("Error interno del servidor");
                next(err);
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
        
    
        
    },
    getUser: (req, res, next) => {
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
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
};