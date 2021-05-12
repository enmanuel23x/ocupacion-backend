require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const request = require("supertest");
const dataSet = require('./contants/activities.values')
const token = require('./contants/global.values').token
const app = require("../../app");
let act_id = null;

describe("Test the activities routes:", () => {
  
  test("GET activities - All parameters (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.success.status}
        &portafolio=${dataSet.get.success.portafolio}
        &page=${dataSet.get.success.page}
        &limit=${dataSet.get.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.get.success.limit)
        done();
      });
  });
  test("GET activities - With bad status (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.fail.status}
        &portafolio=${dataSet.get.success.portafolio}
        &page=${dataSet.get.success.page}
        &limit=${dataSet.get.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.get.success.limit)
        done();
      });
  });
  test("GET activities - With bad portafolio (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.success.status}
        &portafolio=${dataSet.get.fail.portafolio}
        &page=${dataSet.get.success.page}
        &limit=${dataSet.get.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.get.success.limit)
        done();
      });
  });
  test("GET activities - With bad page (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.success.status}
        &portafolio=${dataSet.get.success.portafolio}
        &page=${dataSet.get.fail.page}
        &limit=${dataSet.get.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET activities - With bad limit (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.success.status}
        &portafolio=${dataSet.get.success.portafolio}
        &page=${dataSet.get.success.page}
        &limit=${dataSet.get.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET activities - With all parameters wrong (SECURED)", done => {
    request(app)
      .get(`/v1/activities?
        status=${dataSet.get.fail.status}
        &portafolio=${dataSet.get.fail.portafolio}
        &page=${dataSet.get.fail.page}
        &limit=${dataSet.get.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET activities - whitout parameters (SECURED)", done => {
    request(app)
      .get(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("PUT activities (create no_portafolio) - All parameters (SECURED)", done => {
    request(app)
      .put(`/v1/activities/no_portafolio`)
      .set('Authorization', 'Bearer ' + token)
      .send(dataSet.put.success)
      .then(response => {
        expect(response.statusCode).toBe(200);
        act_id = response.body.data.act_id;
        done();
      });
  });
  test("PUT activities (create no_portafolio) - one parameter wrong (SECURED)", done => {
    request(app)
      .put(`/v1/activities/no_portafolio`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_title: dataSet.put.success.act_title,
        act_description: dataSet.put.success.act_description,
        cli_id: dataSet.put.fail.cli_id
      })
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("PUT activities (create no_portafolio) - two parameter wrong (SECURED)", done => {
    request(app)
      .put(`/v1/activities/no_portafolio`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_title: dataSet.put.success.act_title,
        act_description: dataSet.put.fail.act_description,
        cli_id: dataSet.put.fail.cli_id
      })
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("PUT activities (create no_portafolio) - All parameters wrong (SECURED)", done => {
    request(app)
      .put(`/v1/activities/no_portafolio`)
      .set('Authorization', 'Bearer ' + token)
      .send(dataSet.put.fail)
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("PUT activities (create no_portafolio) - whitout parameters (SECURED)", done => {
    request(app)
      .put(`/v1/activities/no_portafolio`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("POST activities (update/edit) - All parameters (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({ ...dataSet.post.success, act_id})
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        
        done();
      });
  });
  test("POST activities (update/edit) - one parameter wrong (act_id correct) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_status: dataSet.post.fail.act_status, 
        act_clockify_task: dataSet.post.success.act_clockify_task, 
        act_title: dataSet.post.success.act_title, 
        act_description: dataSet.post.success.act_description, 
        cli_id: dataSet.post.success.cli_id,
        act_id
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        done();
      });
  });
  test("POST activities (update/edit) - two parameter wrong (act_id correct) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_status: dataSet.post.fail.act_status, 
        act_clockify_task: dataSet.post.fail.act_clockify_task, 
        act_title: dataSet.post.success.act_title, 
        act_description: dataSet.post.success.act_description, 
        cli_id: dataSet.post.success.cli_id,
        act_id
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        done();
      });
  });
  test("POST activities (update/edit) - three parameter wrong (act_id correct) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_status: dataSet.post.fail.act_status, 
        act_clockify_task: dataSet.post.fail.act_clockify_task, 
        act_title: dataSet.post.fail.act_title, 
        act_description: dataSet.post.success.act_description, 
        cli_id: dataSet.post.success.cli_id,
        act_id
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        done();
      });
  });
  test("POST activities (update/edit) - four parameter wrong (act_id correct) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        act_status: dataSet.post.fail.act_status, 
        act_clockify_task: dataSet.post.fail.act_clockify_task, 
        act_title: dataSet.post.fail.act_title, 
        act_description: dataSet.post.fail.act_description, 
        cli_id: dataSet.post.success.cli_id,
        act_id
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        done();
      });
  });
  test("POST activities (update/edit) - all parameter wrong (act_id correct) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        ...dataSet.post.fail,
        act_id
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad editada")
        const keys = Object.keys(dataSet.post.success);
        for (let index = 0; index < keys.length; index++) {
          expect(response.body.data[keys[index]]).toBe(dataSet.post.success[keys[index]])
        }
        done();
      });
  });
  test("POST activities (update/edit) - all parameter (act_id wrong) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        ...dataSet.post.success,
        act_id: undefined
      })
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("POST activities (update/edit) - all parameter wrong (act_id wrong) (SECURED)", done => {
    request(app)
      .post(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({
        ...dataSet.post.fail,
        act_id: undefined
      })
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("DELETE activities (delete) - All parameters (SECURED)", done => {
    request(app)
      .delete(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({ act_id })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad eliminada")
        done();
      });
  });
  test("DELETE activities (delete) - wrong parameters (SECURED)", done => {
    request(app)
      .delete(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .send({ act_id })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Actividad no encontrada")
        done();
      });
  });
  test("DELETE activities (delete) - whitout parameters (SECURED)", done => {
    request(app)
      .delete(`/v1/activities`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
});
//