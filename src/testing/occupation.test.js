require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const request = require("supertest");
const dataSet = require('./contants/occupation.values')
const token = require('./contants/global.values').token
const app = require("../../app");
let occ_id = null;

describe("Test the occupation routes:", () => {




    test("GET all ocupations - whitout parameters", done => {
        request(app)
            .get(`/v1/no_portafolio/occupation`)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
                done();
            });
    });

    test("GET ocupation by id - existent (SUCCESS)", done => {
        request(app)
            .get(`/v1/no_portafolio/occupation/id/`+dataSet.occupation.success.value)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
                done();
            });
    });

    test("GET ocupation by id - inexistent (SUCCESS)", done => {
        request(app)
            .get(`/v1/no_portafolio/occupation/id/`+dataSet.occupation.fail.value)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(404);
                expect(response.text).toBe('{"Error":"Parametro erroneo o inexistente"}');
                done();
            });
    });

    test("POST occupation (Create) - All parameters (SECURED)", done => {
        request(app)
            .post(`/v1/no_portafolio/occupation`)
            .set('Authorization', 'Bearer ' + token)
            .send({ ...dataSet.createOccupations.success})
            .then(response => {
                expect(response.statusCode).toBe(200);
                const originals = Object.keys(dataSet.createOccupations.success);
                const keys = Object.keys(dataSet.createOccupations.success);
                keys[0] = "col_id_file"
                keys[2] = "occ_percentage"
                keys[3] = "occ_start_date"
                keys[4] = "occ_end_date"
                for (let index = 1; index < keys.length; index++) {
                    expect(response.body[keys[index]]).toBe(dataSet.createOccupations.success[originals[index]])
                }
                occ_id = response.body.occ_id
                done();
            });
    });

    test("POST occupation (Create) - All parameters (INCORRECT)", done => {
        request(app)
            .post(`/v1/no_portafolio/occupation`)
            .set('Authorization', 'Bearer ' + token)
            .send({ ...dataSet.createOccupations.fail})
            .then(response => {
                expect(response.statusCode).toBe(400);
                expect(response.body).toBe("Error interno del servidor")
                done();
            });
    });




    test("PUT update occupations (update) - All parameters (SECURED)", done => {
        let updateInfo = dataSet.updateOccupations.success
        updateInfo.id = occ_id
        request(app)
            .put(`/v1/no_portafolio/occupation`)
            .set('Authorization', 'Bearer ' + token)
            .send({...updateInfo})
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("PUT update occupations (update) - Incorrect parameters (SECURED)", done => {
        request(app)
            .put(`/v1/no_portafolio/occupation`)
            .set('Authorization', 'Bearer ' + token)
            .send({...dataSet.updateOccupations.fail})
            .then(response => {
                expect(response.statusCode).toBe(406);
                done();
            });
    });



    test("DELETE occupation (delete) - All parameters (SECURED)", done => {
        request(app)
            .delete(`/v1/no_portafolio/occupation/`+occ_id)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toStrictEqual({ "result": "Deleted" })
                done();
            });
    });

    test("DELETE occupation (delete) - incorrect parameters (SECURED)", done => {
        request(app)
            .delete(`/v1/no_portafolio/occupation/`+dataSet.deleteOccupations.success.fail)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(404);
                expect(response.text).toBe(JSON.stringify({"result": "Not Found"}))
                done();
            });
    });



    //
    
    
    test("GET all collaborators - whitout parameters", done => {
        request(app)
            .get(`/v1/no_portafolio/ocollabs`)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
                done();
            });
    });
    
    test("GET all activities - whitout parameters", done => {
        request(app)
            .get(`/v1/no_portafolio/oactivities`)
            .set('Authorization', 'Bearer ' + token)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
                done();
            });
    });
});
