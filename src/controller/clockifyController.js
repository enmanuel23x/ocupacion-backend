const clockify = require('../utils/clockify')
const { check } = require('../utils/utils')
module.exports = {

    getClients: async (req, res) => {
        const response = await clockify.getClients()
        if(response != "ERROR"){
            res.status(200).json(response);
        }else{
            res.status(429).json("Error interno del servidor");
        }
    },
    getProjects: async (req, res) => {
        const clientID = req.params.id
        if(check([clientID])){
            const response = await clockify.getProjectByClients(clientID)
            if(response != "ERROR"){
                res.status(200).json(response);
            }else{
                res.status(429).json("Error interno del servidor");
            }
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
    getTasks: async (req, res) => {
        const projectID = req.params.id
        if(check([projectID])){
            const response = await clockify.getTasks(projectID)
            if(response != "ERROR"){
                res.status(200).json(response);
            }else{
                res.status(429).json("Error interno del servidor");
            }
        }else{
            res.status(429).json("Parametros no suministrados");
        }
    },
};