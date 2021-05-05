require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const request = require("supertest");
const dataSet = require('./contants/user.values')
const token = require('./contants/global.values').token
const app = require("../../app");


describe("Test the users routes:", () => {
  
  test("POST Auth method", done => {
    request(app)
      .post("/v1/users/authenticate")
      .send({email: dataSet.users.success.email})
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.user.collaborators.col_email).toBe(dataSet.users.success.email)
        done();
      });
  });
  test("POST Auth method - Without parameters", done => {
    request(app)
      .post("/v1/users/authenticate")
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body).toBe("Parametros no suministrados")
        done();
      });
  });
  test("POST Auth method - With bad parameters", done => {
    request(app)
      .post("/v1/users/authenticate")
      .send({email: dataSet.users.fail.email})
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Correo no registrado')
        done();
      });
  });
  test("POST Refresh method (SECURED) ", done => {
    request(app)
      .post("/v1/users/refresh")
      .set('Authorization', 'Bearer ' + token)
      .send({token: dataSet.users.success.token})
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.user.collaborators.col_email).toBe(dataSet.users.success.email)
        done();
      });
  });
  test("POST Refresh method - wrong token (SECURED) ", done => {
    request(app)
      .post("/v1/users/refresh")
      .set('Authorization', 'Bearer ' + token)
      .send({token: dataSet.users.fail.token})
      .then(response => {
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid Token')
        done();
      });
  });
  test("POST Refresh method - without parameters (SECURED) ", done => {
    request(app)
      .post("/v1/users/refresh")
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid Token')
        done();
      });
  });
  test("GET user (SECURED)", done => {
    request(app)
      .get("/v1/users/"+dataSet.users.success.email)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.collaborators.col_email).toBe(dataSet.users.success.email)
        done();
      });
  });
  test("GET user  - not rergistered email", done => {
    request(app)
      .get("/v1/users/"+dataSet.users.fail.email)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(dataSet.users.fail.response))
        done();
      });
  });
});
//