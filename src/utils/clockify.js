const axios = require('axios').default;
const workspaceId = process.env.WORKSPACE_ID
//Base clockify api axios instance
const ClockifyAxios = axios.create({
    baseURL: 'https://api.clockify.me/api/v1'
});
ClockifyAxios.defaults.headers.common['Content-Type'] = 'application/json';
ClockifyAxios.defaults.headers.common['X-Api-Key'] = process.env.API_KEY;
//Reports api axios instance
const ClockifyAxios_reports = axios.create({
    baseURL: `https://reports.api.clockify.me/v1/workspaces/${workspaceId}`
});
ClockifyAxios_reports.defaults.headers.common['Content-Type'] = 'application/json';
ClockifyAxios_reports.defaults.headers.common['X-Api-Key'] = process.env.API_KEY;
//
const getRange = (month, year) => {
    const format = (myDate) => {
        return myDate.toISOString().split("Z")[0]
    }
    let lastDay = format(new Date(Date.UTC(year, month, 0)));
    let firstDay = format(new Date(Date.UTC(year, month-1, 1)));
    return {firstDay, lastDay}; 
}
module.exports = {
    getRange,
    getHours: async (firstDay, lastDay, task, user) =>{//Devuelve las horas
        const data = {
            dateRangeStart: firstDay,
            dateRangeEnd: lastDay,
            summaryFilter: {"groups": ["PROJECT", "TASK"]},
            exportType: "JSON",
            users: {
                ids: [user],
                contains: "CONTAINS",
                status: "ALL"
            },
            tasks: {
                ids: [task]
            }
        }
        return await ClockifyAxios_reports.post(`/reports/summary`, data)
            .then( response => { 
                const result = response.data;
                if(result){
                    const hours = result.totals[0] ? result.totals.map(el => el ? el.totalTime : 0).reduce((a, b) => a + b, 0)/3600 : 0
                    return hours
                }else{  
                    return "ERROR"
                }
            })
        .catch(error => {
            console.dir(error)
            return "ERROR"
        });
    },
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
            if(error.response.data.message.includes("not found")){
                return []
            }else{
                console.dir(error.response)
                return "ERROR"
            }
        });
    },
    getUserId: async (email) =>{//Recibe projectID y devuelve los task activos correspondientes
        return ClockifyAxios.get(`/workspaces/${workspaceId}/users?email=${email}`)
            .then( data => { 
                const result = data.data;
                if(result){
                    return result[0].id
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