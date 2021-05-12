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
    }
};