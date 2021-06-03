const models = require('../models');
const { check, isNumeric } = require('../utils/utils')
const Op = require('sequelize').Op;

const fetchData = async (where, where2, where3, offset, limit) =>{
    return await new Promise((resolve, reject) => {
        models.occupations.findAndCountAll({
            limit: parseInt(limit),
            offset,
            where,
            order: [
                ['act_id', 'DESC']
            ],
            include:
                [{
                    model: models.activities,
                    as: 'activities',
                    where: where2,
                    include:
                        [{
                            model: models.clients,
                            as: 'clients'
                        },{
                            model: models.portfolio_requests,
                            as: 'portfolio_requests'
                        }],
                },{
                    model: models.collaborators,
                    as: 'collaborators'
                },{
                    model: models.summary_time_card,
                    as: 'summary_time_card',
                    where: where3
                }],
        }).then((activities) => {
            resolve({status: 200, data: activities})
        }, (err) => {
            console.dir(err);
            resolve({status:500, msg: "Error interno del servidor", err: true})
        });
      });
}

module.exports = {
    getReport1: async (req, res) => {
        const { page, limit, collaborator, client, activitie, minDate, maxDate } = req.query
        /*
        portafolio: (0 -> No portafolio), (1 -> Porfaolio), (undefined -> todos)
        status: (0 -> No activo), (1 -> Activo), (undefined -> todos)
        clockify: (0 -> No registrados), (1 -> Registrados), (undefined -> todos)
        */
        if(check([page, limit])){
            if(isNumeric(page) && isNumeric(limit)){
                const offset = ( page ? page : 0) * parseInt(limit);
                let where = {}, where2 = {}, where3 = {};
                if( check([collaborator]) && isNumeric(collaborator)){
                    where.col_id_file = collaborator;
                }
                if( check([client]) && isNumeric(client)){
                    where2.cli_id = client;
                } 
                if(check([activitie])){
                    where2.act_id = activitie;
                }
                if(check([minDate, maxDate])){
                    where = {
                        ...where,
                        [Op.or]: [
                          {
                            [Op.or]: [
                                {
                                  [Op.and]: [
                                      {
                                          occ_start_date: {[Op.gte]: minDate}
                                      },
                                      {
                                          occ_start_date: {[Op.lte]: maxDate}
                                      }
                                    ]
                                },
                                {
                                  [Op.and]: [
                                      {
                                          occ_end_date: {[Op.gte]: minDate}
                                      },
                                      {
                                          occ_end_date: {[Op.lte]: maxDate}
                                      }
                                    ]
                                }
                              ]
                          },
                          {
                            [Op.and]: [
                                {
                                    occ_start_date: {[Op.lte]: minDate}
                                },
                                {
                                    occ_end_date: {[Op.gte]: maxDate}
                                }
                              ]
                          }
                        ]
                    }
                    where3 = {
                        sum_month: {[Op.between]: [
                                (new Date(minDate+'T00:00:00.000')).getMonth()+1, 
                                (new Date(maxDate+'T00:00:00.000')).getMonth()+1
                            ]}
                    }
                }
                const dataSrc = await fetchData(where, where2, where3, offset, limit)
                let copy = [], dup = false;
                if(dataSrc.err){
                    res.status(dataSrc.status).json(dataSrc.msg)
                }else{
                    const activities = dataSrc.data;
                    for (let index = 0; index < activities.rows.length; index++) {
                        if(index == 0){
                            copy.push(activities.rows[index])
                        }else{
                            dup = false;
                            for (let index2 = 0; index2 < copy.length; index2++) {
                                if(activities.rows[index].act_id === copy[index2].act_id){
                                    copy[index2].summary_time_card.push(...activities.rows[index].summary_time_card) 
                                    dup = true;
                                    break;
                                }
                            }
                            if(!dup){
                                copy.push(activities.rows[index])
                            }
                        }
                    }
                    res.status(200).json({count: activities.count, rows:copy});
                }
            }else{
                res.status(500).json("Parametros no suministrados");
            }
            
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    },
    getReport2: async (req, res) => {
        const { page, limit, collaborator, client, activitie, minDate, maxDate } = req.query
        /*
        portafolio: (0 -> No portafolio), (1 -> Porfaolio), (undefined -> todos)
        status: (0 -> No activo), (1 -> Activo), (undefined -> todos)
        clockify: (0 -> No registrados), (1 -> Registrados), (undefined -> todos)
        */
        if(check([page, limit])){
            if(isNumeric(page) && isNumeric(limit)){
                const offset = ( page ? page : 0) * parseInt(limit);
                let where = {}, where2 = {}, where3 = {};
                if( check([collaborator]) && isNumeric(collaborator)){
                    where.col_id_file = collaborator;
                }
                if( check([client]) && isNumeric(client)){
                    where2.cli_id = client;
                } 
                if(check([activitie])){
                    where2.act_id = activitie;
                }
                if(check([minDate, maxDate])){
                    where = {
                        ...where,
                        [Op.or]: [
                          {
                            [Op.or]: [
                                {
                                  [Op.and]: [
                                      {
                                          occ_start_date: {[Op.gte]: minDate}
                                      },
                                      {
                                          occ_start_date: {[Op.lte]: maxDate}
                                      }
                                    ]
                                },
                                {
                                  [Op.and]: [
                                      {
                                          occ_end_date: {[Op.gte]: minDate}
                                      },
                                      {
                                          occ_end_date: {[Op.lte]: maxDate}
                                      }
                                    ]
                                }
                              ]
                          },
                          {
                            [Op.and]: [
                                {
                                    occ_start_date: {[Op.lte]: minDate}
                                },
                                {
                                    occ_end_date: {[Op.gte]: maxDate}
                                }
                              ]
                          }
                        ]
                    }
                    where3 = {
                        sum_month: {[Op.between]: [
                                (new Date(minDate+'T00:00:00.000')).getMonth()+1, 
                                (new Date(maxDate+'T00:00:00.000')).getMonth()+1
                            ]}
                    }
                }
                const dataSrc = await fetchData(where, where2, where3, offset, limit)
                if(dataSrc.err){
                    res.status(dataSrc.status).json(dataSrc.msg)
                }else{
                    res.status(200).json(dataSrc.data);
                }
            }else{
                res.status(500).json("Parametros no suministrados");
            }
            
        }else{
            res.status(500).json("Parametros no suministrados");
        }
    }
};