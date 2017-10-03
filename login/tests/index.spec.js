const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('GET /', () => {
    it('Should return with status 200', () => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.not.be.null,
        expect(res).to.have.status(200);
        done();
      });
    });
  });
  describe('POST /', () => {
    it('Should return with status 200', () => {
      chai.request(server)
      .post('/')
      .end((err, res) => {
        expect(err).to.not.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Should return status 401 on error', () => {
      chai.request(server)
      .post('/')
      .end((err, res) => {
        expect(err).to.have.status(401);
        done();
      });
    });
    it('Should error if no user input', () => {
      chai.request(server)
      .post('/')
      .end((err, res) => {
        expect(user).to.be.an('object');
        expect({a: 1}).to.have.own.property('username');
        expect({a: 1}).to.have.own.property('password');
      });
    });
  });
});
