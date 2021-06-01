const models = require('../models');
const { check } = require('../utils/utils')

module.exports = {
    getClients: (req, res) => {
        const { status } = req.query
        /*
        status: (0 -> No activo), (1 -> Activo)
        */
        let where = {}
        if(status){
            where.cli_status = status
        } 
        models.clients.findAll({
            where
        }).then((clients) => {
            res.status(200).json(clients);
        }, (err) => {
            console.dir(err);
            res.status(500).json("Error interno del servidor");
        })
    },
    getCollaborators: (req, res) => {
        models.collaborators.findAll({
            attributes: ['col_id_file', 'col_name', 'col_last_name']
        }).then((collaborators) => {
            res.status(200).json(collaborators);
        }, (err) => {
            console.dir(err);
            res.status(500).json("Error interno del servidor");
        })
    },
    getActivities: (req, res) => {
        models.activities.findAll({
            attributes: ['act_id', 'act_title']
        }).then((activities) => {
            res.status(200).json(activities);
        }, (err) => {
            console.dir(err);
            res.status(500).json("Error interno del servidor");
        })
    }
};