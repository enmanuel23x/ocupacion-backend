const axios = require('axios').default;
const workspaceId = process.env.WORKSPACE_ID
const ClockifyAxios = axios.create({
    baseURL: 'https://api.clockify.me/api/v1'
});
ClockifyAxios.defaults.headers.common['Content-Type'] = 'application/json';
ClockifyAxios.defaults.headers.common['X-Api-Key'] = process.env.API_KEY;

module.exports = {
    getClients:  async () =>{//Devuelve todos los clientes
        return ClockifyAxios.get(`/workspaces/${workspaceId}/clients`)
            .then( data => { 
                const result = data.data;
                if(result){
                    return result
                }else{  
                    return "ERROR"
                }
            })
        .catch(error => {
            console.dir(error.response)
            return "ERROR"
        });
    },
    getProjectByClients: async (clientID) =>{//recibe clientID y devuelve los projects activos correspondientes
        return ClockifyAxios.get(`/workspaces/${workspaceId}/projects?page-size=10000&archived=false&clients=`+clientID)
            .then( data => { 
                const result = data.data;
                if(result){
                    return result
                }else{  
                    return "ERROR"
                }
            })
        .catch(error => {
            console.dir(error.response)
            return "ERROR"
        });
    },
    getTasks: async (projectID) =>{//Recibe projectID y devuelve los task activos correspondientes
        return ClockifyAxios.get(`/workspaces/${workspaceId}/projects/${projectID}/tasks?is-active=true&page-size=10000`)
            .then( data => { 
                const result = data.data;
                if(result){
                    return result
                }else{  
                    return "ERROR"
                }
            })
        .catch(error => {
            console.dir(error.response)
            return "ERROR"
        });
    }
}