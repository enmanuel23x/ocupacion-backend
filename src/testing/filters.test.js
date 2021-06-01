require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const request = require("supertest");
const dataSet = require('./contants/filters.values')
const token = require('./contants/global.values').token
const app = require("../../app");


describe("Test the filters routes:", () => {
  //Normal filters
  test("GET Clients for filters - with status 0 (SECURED)", done => {
    request(app)
      .get("/v1/filters/clients?status=" + dataSet.clients.status_0)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Clients for filters - with status 1 (SECURED)", done => {
    request(app)
      .get("/v1/filters/clients?status=" + dataSet.clients.status_1)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Clients for filters - with status undefined (SECURED)", done => {
    request(app)
      .get("/v1/filters/clients?status=" + dataSet.clients.status_null)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  //Clockify filters
  test("GET Clients of Clockify (SECURED)", done => {
    request(app)
      .get("/v1/filters/clockify/clients")
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Projects of Clockify(Mayoreo) (SECURED)", done => {
    request(app)
      .get("/v1/filters/clockify/projects/" + dataSet.clockify.client.sucess)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Projects of Clockify(undefined) (SECURED)", done => {
    request(app)
      .get("/v1/filters/clockify/projects/" + dataSet.clockify.client.fail)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(0)
        done();
      });
  });
  test("GET Tasks of Clockify(Mayoreo - Continuidad de Aplicaciones) (SECURED)", done => {
    request(app)
      .get("/v1/filters/clockify/tasks/" + dataSet.clockify.project.sucess)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Tasks of Clockify(undefined) (SECURED)", done => {
    request(app)
      .get("/v1/filters/clockify/tasks/" + dataSet.clockify.project.fail)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(0)
        done();
      });
  });
  test("GET Activities for filters(SECURED)", done => {
    request(app)
      .get("/v1/filters/activities")
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
  test("GET Collaborators for filters(SECURED)", done => {
    request(app)
      .get("/v1/filters/collaborators")
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0)
        done();
      });
  });
});