const dataSet = {
    get: {
        success:{
            status: 1,
            portafolio: 1,
            page: 0,
            limit: 5
        },
        fail: {
            status: undefined,
            portafolio: undefined,
            page: undefined,
            limit: undefined
        }
    },
    put: {
        success: {
            act_title: "Prueba",
            act_description:"Actividad de Prueba",
            cli_id: 1
        },
        fail: {
            act_title: undefined,
            act_description: undefined,
            cli_id: undefined
        }
    },
    delete: {
        fail: {
            act_id: undefined
        }
    },
    post: {
        success: {
            act_status: 0, 
            act_clockify_task: "asnlgniajpgjaopgaf64f5a4sg65as4", 
            act_title: "test", 
            act_description: "test", 
            cli_id: 2
        },
        fail: {
            act_id: undefined,
            act_status: undefined,
            act_clockify_task: undefined, 
            act_title: undefined, 
            act_description: undefined, 
            cli_id: undefined
        }
    }
  }
module.exports = dataSet