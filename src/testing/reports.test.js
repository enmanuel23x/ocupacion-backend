require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const request = require("supertest");
const dataSet = require('./contants/reports.values')
const token = require('./contants/global.values').token
const app = require("../../app");
let act_id = null;

describe("Test the activities routes:", () => {
  test("GET Report 1 - All parameters (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With bad page (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.fail.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET Report 1 - With bad limit (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET Report 1 - With bad maxDate (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.fail.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With bad minDate (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.fail.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With bad activitie (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.fail.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With bad client (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.fail.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With bad collaborator (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.fail.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 1 - With all wrong (SECURED)", done => {
    request(app)
      .get(`/v1/reports/1?
        collaborator=${dataSet.report.fail.collaborator}
        &client=${dataSet.report.fail.client}
        &activitie=${dataSet.report.fail.activitie}
        &minDate=${dataSet.report.fail.minDate}
        &maxDate==${dataSet.report.fail.maxDate}
        &page=${dataSet.report.fail.page}
        &limit=${dataSet.report.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET Report 2 - All parameters (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  
  test("GET Report 2 - With bad page (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.fail.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET Report 2 - With bad limit (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("GET Report 2 - With bad maxDate (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.fail.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 2 - With bad minDate (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.fail.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 2 - With bad activitie (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.fail.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 2 - With bad client (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.success.collaborator}
        &client=${dataSet.report.fail.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 2 - With bad collaborator (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.fail.collaborator}
        &client=${dataSet.report.success.client}
        &activitie=${dataSet.report.success.activitie}
        &minDate=${dataSet.report.success.minDate}
        &maxDate==${dataSet.report.success.maxDate}
        &page=${dataSet.report.success.page}
        &limit=${dataSet.report.success.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.rows.length).toBeGreaterThanOrEqual(0)
        expect(response.body.rows.length).toBeLessThanOrEqual(dataSet.report.success.limit)
        done();
      });
  });
  test("GET Report 2 - With all wrong (SECURED)", done => {
    request(app)
      .get(`/v1/reports/2?
        collaborator=${dataSet.report.fail.collaborator}
        &client=${dataSet.report.fail.client}
        &activitie=${dataSet.report.fail.activitie}
        &minDate=${dataSet.report.fail.minDate}
        &maxDate==${dataSet.report.fail.maxDate}
        &page=${dataSet.report.fail.page}
        &limit=${dataSet.report.fail.limit}`)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
});
//