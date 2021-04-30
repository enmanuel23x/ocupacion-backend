const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const { check, isNumeric } = require('../utils/utils')

const getUsrId = (token) => {
    let decode = jwt.decode(token);
    if(decode.sub){
        return decode.sub
    }
    return undefined;
}

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
                    res.status(500).json({message: 'Correo no registrado'})
                }else{
                    const token = jwt.sign({ sub: user.usr_id }, config.secret);
                    res.json({user, token})
                }
            }, (err) => {
                console.dir(err);
                res.status(500).json("Error interno del servidor");
            });
        }else{
            res.status(500).json("Parametros no suministrados");
        }
        
    
        
    },
    refresh: (req, res) => {
        const { token } = req.body
        let usr_id = undefined;
        if(check([token])){
            usr_id = getUsrId(token)
        } 
        if(check([usr_id]) && isNumeric(usr_id)){
            models.users.findAll({
                where: {
                    usr_id: usr_id
                },
                include:
                    [{
                        model: models.collaborators,
                        as: 'collaborators',
                    }],
            }).then((users) => {
                let user = users.length > 0 ? users[0] : undefined
                if (!user){
                    res.status(401).json({ message: 'Invalid Token' });
                }else{
                    const token = jwt.sign({ sub: user.usr_id }, config.secret);
                    res.json({user, token})
                }
            }, (err) => {
                console.dir(err);
                res.status(500).json("Error interno del servidor");
            });
        }else{
            res.status(401).json({ message: 'Invalid Token' });
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
                res.status(500).json("Error interno del servidor");
            });
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    },
};