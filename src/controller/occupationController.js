const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    create: (req, res, next)  => {
        const { col_id, act_id, percentage, start, end } = req.body
        models.occupations.create({
            col_id_file: col_id,
            act_id: act_id,
            occ_percentage: percentage,
            occ_start_date: start,
            occ_end_date: end
        }).then((occupations) => {
            res.status(200).json(occupations.length == 0 ? {} : occupations);
        }, (err) => {
            console.dir(err);
            res.status(400).json("Error interno del servidor");
            next(err);
        });
    },
    readAll: (req, res, next)  => {
        models.occupations.findAll({
            include: [
                {
                    model: models.activities,
                    as: 'activities',
                    attributes: ['act_title']
                },
                {
                    model: models.collaborators,
                    as: 'collaborators',
                    attributes: ['col_name', 'col_last_name']
                }
                ]
        }).then((occupations) => {
            res.status(200).json(occupations.length == 0 ? {} : occupations);
        }, (err) => {
            // console.dir(err);
            res.status(429).json("Error interno del servidor");
            next(err);
        });
    },
    readById: (req, res, next) => {
        const id = req.params.id
        if (id){
            models.occupations.findAll({
                where: {
                    occ_id: id
                },
                include: [
                    {
                        model: models.activities,
                        as: 'activities',
                        attributes: ['act_title']
                    },
                    {
                        model: models.collaborators,
                        as: 'collaborators',
                        attributes: ['col_name', 'col_last_name']
                    }
                ]
            }).then((occupations) => {
                if (occupations.length === 0){
                    res.status(404).json({"Error": "Parametro erroneo o inexistente"});
                } else {
                    res.status(200).json(occupations);
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
    update: (req, res, next)  => {
        const { id, col_id, act_id, percentage, start, end } = req.body
        models.occupations.update({
            col_id_file: col_id,
            act_id: act_id,
            occ_percentage: percentage,
            occ_start_date: start,
            occ_end_date: end
        }, {
            where: {
                occ_id: id
            }
        }).then((occupations) => {
           if (occupations[0] === 1) {
               res.status(200).json({"result": "Modificado"})
           } else if (occupations[0] === 0){
               res.status(406).json({"result": "Not Found or Not Changed"})
           }
        }, (err) => {
            console.dir(err);
            res.status(429).json("Error interno del servidor");
            next(err);
        });
    },
    delete: (req, res, next)  => {
        const id = req.params.id
        if (id){
            models.occupations.destroy({
                where: {
                    occ_id: id
                }
            }).then((occupations) => {
                if (occupations === 1){
                    res.status(200).json({"result": "Deleted"})
                } else {
                    res.status(404).json({"result": "Not Found"})
                }
            }, (err) => {
                console.dir(err);
                res.status(429).json("Error interno del servidor");
                next(err);
            });
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    }
};
