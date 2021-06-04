const models = require('../models');
const clockify = require('./clockify');
const Op = require('sequelize').Op;
const fetchData = async (minDate, maxDate) =>{
    return await new Promise((resolve, reject) => {
        models.occupations.findAll({
            where:{
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
            },
            order: [
                ['act_id', 'DESC']
            ],
            include:
                [{
                    model: models.activities,
                    as: 'activities',
                    where: {
                        act_status: {[Op.between]: [0, 1]},
                        act_clockify_task:  { [Op.ne]: null }
                    },
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
                    as: 'summary_time_card'
                }],
        }).then((activities) => {
            resolve({status: 200, data: activities})
        }, (err) => {
            //console.dir(err);
            resolve({status:500, msg: "Error interno del servidor", err: true})
        });
      });
}
const fetchNonWorkDays = async (fromMonth) =>{
    return await new Promise((resolve, reject) => {
        models.non_working_days.findAll({
            where: {  $and: models.sequelize.where(models.sequelize.fn("month", models.sequelize.col("non_date")), fromMonth) }
        }).then((activities) => {
            resolve({status: 200, data: activities})
        }, (err) => {
            console.dir(err);
            resolve({status:500, msg: "Error interno del servidor", err: true})
        });
      });
}
const createTimeCard = async ({occ_id, sum_month, sum_year, sum_hh}) =>{
    return await new Promise((resolve, reject) => {
        models.summary_time_card.create({
            occ_id,
            sum_month,
            sum_year,
            sum_hh
        }).then((activities) => {
            resolve({status: 200, message: "Timecard creado"});
        }, (err) => {
            console.dir(err);
            resolve({status: 500, message: "Error interno del servidor"});
        });
      });
}
const updateTimeCard = async (timecard, sum_hh) =>{
    return await new Promise((resolve, reject) => {
        timecard.update({
            sum_hh
        }).then((activities) => {
            resolve({status: 200, message: "Timecard actualizado"});
        }, (err) => {
            console.dir(err);
            resolve({status: 500, message: "Error interno del servidor"});
        });
      });
}
const upadteOccuption = async (occupaction, occ_real) =>{
    return await new Promise((resolve, reject) => {
        occupaction.update({
            occ_real
        }).then((activities) => {
            resolve({status: 200, message: "Ocupacion actualizada"});
        }, (err) => {
            console.dir(err);
            resolve({status: 500, message: "Error interno del servidor"});
        });
      });
}
const closeActivitie = async (activitie) =>{
    return await new Promise((resolve, reject) => {
        activitie.update({
            act_status: -1
        }).then((activities) => {
            resolve({status: 200, message: "Actividad cerrada"});
        }, (err) => {
            console.dir(err);
            resolve({status: 500, message: "Error interno del servidor"});
        });
      });
}
const dateIsInArray = (date, array)  => {
    let exist = false, d1, d2;
    const format = (myDate) => {
        let element = myDate.toISOString();
        element = new Date(element.includes("T") ? element.split("T")[0] : element)
        return element
    }
    for (let index = 0; index < array.length; index++) {
        d1 = new Date(date);
        d1 = format(d1)
        d2 = new Date(array[index].non_date);
        d2 = format(d2)
        if(
            d1.getDate() == d2.getDate()
            &&
            d1.getMonth() == d2.getMonth()
            &&
            d1.getFullYear() == d2.getFullYear()
        )
        {
            exist = true;
            break;
        }
    }
    return exist;
}
const getDaysCount = function({start, end}, non_working_days) {
    if(start != 0){
        let element, count = 0, tmp;
        for(dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
            element = new Date(dt);
            tmp = dateIsInArray(element, non_working_days);
            if(
                element.getDay() != 6 
                && 
                element.getDay() != 0
                &&
                !tmp
            ){
                count++;
            }
        }
        return count;
    }else{
        return 0;
    }
};
const filterDates = (start_curr_month, end_curr_month, start_occ, end_occ) => {
    let start, end;
    if(start_curr_month.getMonth() == start_occ.getMonth()){
        start = start_occ;
    }else if( start_curr_month.getMonth() > start_occ.getMonth()){
        start = start_curr_month;
    }else if( start_curr_month.getMonth() < start_occ.getMonth()){
        start = 0;
    }
    if(end_curr_month.getMonth() == end_occ.getMonth()){
        end = end_occ;
    }else if( end_curr_month.getMonth() > end_occ.getMonth()){
        end = end_occ;
    }else if( end_curr_month.getMonth() < end_occ.getMonth()){
        end = end_curr_month;
    }
    return { start, end}
}
const updater = async (month, year, firstDay, lastDay) => {
    console.log(month, year, firstDay, lastDay)
    let non_working_days = await fetchNonWorkDays(month);
    let occupations_list = await fetchData(firstDay, lastDay);
    if(occupations_list.data.length > 0 && non_working_days.status == 200){
        occupations_list = occupations_list.data
        non_working_days = non_working_days.data
        let tmp = {},
        hours = 0,
        DaysCount = {},
        timecard = {}, 
        exist = false;
        for (let index = 0; index < occupations_list.length; index++) {
            tmp = {
                user: await clockify.getUserId( occupations_list[index].collaborators.col_email),
                task: occupations_list[index].activities.act_clockify_task
            }
            hours = await clockify.getHours(firstDay, lastDay, tmp.task, tmp.user)
            hours = hours == "ERROR" ? 0 : hours;
            DaysCount = filterDates(
                new Date(firstDay),
                new Date(lastDay),  
                new Date(occupations_list[index].occ_start_date), 
                new Date(occupations_list[index].occ_end_date)
                )
            DaysCount = getDaysCount(DaysCount, non_working_days);
            exist = false;
            for (let index2 = 0; index2 < occupations_list[index].summary_time_card.length; index2++) {
                timecard = occupations_list[index].summary_time_card[index2]
                if(timecard.sum_month == month && timecard.sum_year == year){

                    tmp = await updateTimeCard(timecard, hours);
                    console.log({ fn: "Update card",...tmp})
                    exist = true;
                    break;
                }
            }
            if(!exist){
                timecard = {
                    occ_id: occupations_list[index].occ_id,
                    sum_month: month,
                    sum_year: year,
                    sum_hh: hours
                }
                tmp = await createTimeCard(timecard);
                console.log({ fn: "Create card",...tmp})
            }
            if(occupations_list[index].activities.act_status == 0){
                tmp = await closeActivitie(occupations_list[index].activities)
                console.log({ fn: "Close activitie",...tmp})
            }
            tmp = await upadteOccuption(
                occupations_list[index], 
                DaysCount > 1 ? 
                    parseInt((hours / (DaysCount*8))*100)
                    : 
                    0)
            console.log({ fn: "Update occupation",...tmp})
        }
    }
    return "finish"
}
module.exports = {
    
    runSync: async () => {
        const format = (myDate) => {
            return myDate.toISOString().split("T")[0] + 'T00:00:00.000'
        }
        let curr = new Date;
        const month = curr.getMonth()+1, 
            year = curr.getFullYear();
        const first = curr.getDate() - curr.getDay()-6;
        const last = first +6;
        let firstdayOfWeek = new Date((new Date()).setDate(first)),
            lastdayOfWeek = new Date((new Date()).setDate(last)), 
            year2 =  firstdayOfWeek.getFullYear();
        if(curr.getMonth() > firstdayOfWeek.getMonth() || year > year2){
            const prevMonth  = clockify.getRange( month == 0 ? 12 : month-1, year2)
            await updater(month-1, year2, prevMonth.firstDay, prevMonth.lastDay )
            //console.log({month: month-1, year: year2, firstdayOfWeek: prevMonth.firstDay, lastdayOfWeek: prevMonth.lastDay });
        }
        if(curr.getMonth() == lastdayOfWeek.getMonth() ){
            const currMonth  = clockify.getRange(month, year)
            await updater(month-1, year2, currMonth.firstDay, format(lastdayOfWeek)  )
            //console.log({month: month, year, firstdayOfWeek: currMonth.firstDay, lastdayOfWeek: format(lastdayOfWeek) });
        }
        return 'FINISHED'
    }
}
