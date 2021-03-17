const config = require('config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const { check } = require('../utils/utils')

module.exports = {
    authenticate: (req, res) => {
        const { email } = req.body
        if(check([email])){
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
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
        
    
        
    },
    getUser: (req, res) => {
        const email = req.params.id
        if(check([email])){
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
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
};