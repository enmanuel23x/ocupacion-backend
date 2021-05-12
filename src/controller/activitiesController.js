const models = require('../models');
const { check, checkAll, isNumeric } = require('../utils/utils')
const Op = require('sequelize').Op;

module.exports = {
    getActivities: (req, res) => {
        const { portafolio, status, page, limit, clockify } = req.query
        /*
        portafolio: (0 -> No portafolio), (1 -> Porfaolio), (undefined -> todos)
        status: (0 -> No activo), (1 -> Activo), (undefined -> todos)
        clockify: (0 -> No registrados), (1 -> Registrados), (undefined -> todos)
        */
        if(check([page, limit])){
            if(isNumeric(page) && isNumeric(limit)){
                const offset = ( page ? page : 0) * parseInt(limit);
                let where = {}
                if(isNumeric(portafolio)){
                    if(portafolio == "1" || portafolio == "0") where.act_portfolio = portafolio;
                }
                if(isNumeric(status)){
                    if(status == "1" || status == "0") where.act_status = status;
                } 
                if(clockify == "1"){
                    where.act_clockify_task = {[Op.ne]: null}
                }
                if(clockify == "0"){
                    where.act_clockify_task = {[Op.eq]: null}
                }
                models.activities.findAndCountAll({
                    limit: parseInt(limit),
                    offset,
                    where,
                    order: [
                        ['act_id', 'DESC']
                    ],
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
                    //console.dir(err);
                    res.status(500).json("Error interno del servidor");
                });
            }else{
                res.status(500).json("Parametros no suministrados");
            }
            
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    },
    addNoportafolio: (req, res) => {
        const { act_title, act_description, cli_id } = req.body
        if( check([ act_title, act_description, cli_id ]) && isNumeric(cli_id)){
            models.activities.create({
                ...req.body,
                act_portfolio: 0,
                act_status: 1
            }).then((activities) => {
                res.status(200).json({message: "Actividad creada", data: activities});
            }, (err) => {
                //console.dir(err);
                res.status(500).json("Error interno del servidor");
            });
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    },
    editActivities: (req, res) => {
        const {act_id, act_status, act_clockify_task, act_title, act_description, cli_id} = req.body
        if(check([ act_id ]) && isNumeric(act_id)){
            models.activities.findOne({ 
                where: { act_id } 
                }).then((activitie) => {
                    if (activitie) {
                        activitie.update({
                            act_title: (check([act_title]) ? act_title : activitie.act_title), 
                            act_description: (check([act_description]) ? act_description : activitie.act_description), 
                            act_status: (check([act_status]) && isNumeric(act_status) ? act_status : activitie.act_status), 
                            act_clockify_task: (check([act_clockify_task]) ? act_clockify_task : activitie.act_clockify_task),
                            cli_id: (check([cli_id]) && isNumeric(cli_id) ? cli_id : activitie.cli_id),
                            }).then((activitie) => {
                                    res.status(200).json({ message: "Actividad editada", data: activitie});
                                }, (err) => {
                                    //console.dir(err);
                                    res.status(500).json('Error interno del servidor 1');
                                });
                        }else{
                            res.status(500).json('Error interno del servidor 2');
                        }
                    }, (err) => {
                        res.status(500).json('Error interno del servidor 3');
                    });
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    },
    deleteActivitie: (req, res) => {
        const { act_id } = req.body
        if( check([ act_id ]) && isNumeric(act_id)){
            models.activities.destroy({ 
                where: { act_id } 
                }).then((activitie) => {
                    res.status(200).json({
                        message: activitie == 1 ? "Actividad eliminada" : "Actividad no encontrada", 
                        data: activitie});
            }, (err) => {
                //console.dir(err);
                res.status(500).json("Error interno del servidor");
            });
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    }
};