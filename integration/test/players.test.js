const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');
const deleteAllPlayer = require('../helpers/deleteAllPlayer');

chai.use(chaiHttp);

const expect = chai.expect;

after(function() {
  deleteAllPlayer();
});

describe('Players CRUD', function() {
  describe('GET /players', function() {
    it('should send an array with 200 status code', function(done) {
    //
      chai
        .request(app)
        .get('/players')
        .then(function(res) {

          // Assertion
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();

        })
        .catch(function(err) {
          console.log(err);
        });
      //
    });
  });
  describe('POST /players', function() {
    it('should send an object with 201 status code', function(done) {
      chai
        .request(app)
        .post('/players')
        .send({ name: 'Midorima', position: 'SG' })
        .then(function(res) {

          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('position');
          expect(res.body.name).to.equal('Midorima');
          expect(res.body.position).to.equal('SG');
          done();

        })
        .catch(function(err) {
          console.log(err);
        });
    })
  });
});
