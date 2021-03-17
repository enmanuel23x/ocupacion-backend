const models = require('../models');
const { check } = require('../utils/utils')

module.exports = {
    getActivities: (req, res) => {
        const { portafolio, status, page, limit } = req.query
        /*
        portafolio: (0 -> No portafolio), (1 -> Porfaolio), (undefined -> todos)
        status: (0 -> No activo), (1 -> Activo)
        */
        if(check([page, limit])){
            const offset = ( page ? page : 0) * parseInt(limit);
            let where = {}
            if(portafolio){
                where.act_portfolio = portafolio
            }
            if(status){
                where.act_status = status
            } 
            models.activities.findAndCountAll({
                limit: parseInt(limit),
                offset,
                where,
                include:
                    [{
                        model: models.clients,
                        as: 'clients'
                    },{
                        model: models.portfolio_requests,
                        as: 'portfolio_requests'
                    }],
            }).then((activities) => {
                res.status(200).json(activities);
            }, (err) => {
                console.dir(err);
                res.status(429).json("Error interno del servidor");
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
    addNoportafolio: (req, res) => {
        const { act_title, act_description, cli_id } = req.body
        if( check([ act_title, act_description, cli_id ])){
            models.activities.create({
                ...req.body,
                act_portfolio: 0,
                act_status: 1
            }).then((activities) => {
                res.status(200).json("Actividad creada");
            }, (err) => {
                console.dir(err);
                res.status(429).json("Error interno del servidor");
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
    editActivities: (req, res) => {
        const {act_id, act_status, act_clockify_task} = req.body
        if(check([ act_id, act_status, act_clockify_task ])){
            models.activities.findOne({ 
                where: { act_id } 
                }).then((activitie) => {
                    if (activitie) {
                        activitie.update({
                            act_status, act_clockify_task
                            }).then((activitie) => {
                                    res.status(200).json("Actividad editada");
                                }, (err) => {
                                    console.dir(err);
                                    res.status(429).json('Error interno del servidor');
                                });
                        }else{
                            res.status(429).json('Error interno del servidor');
                        }
                    }, (err) => {
                        message = 'Not data';
                        res.status(429).json('Error interno del servidor');
                    });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
    deleteActivitie: (req, res) => {
        const { act_id } = req.body
        if( check([ act_id ])){
            models.activities.destroy({ 
                where: { act_id } 
                }).then((activitie) => {
                    console.log(activitie)
                    res.status(200).json("Actividad eliminada");
            }, (err) => {
                console.dir(err);
                res.status(429).json("Error interno del servidor");
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    }
};