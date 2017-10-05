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
        expect(err).to.be.not.null,
        expect(res).to.have.status(200);
        done();
      });
    });
  });
  describe('POST /', () => {
    const user = {
      username: 'name',
      password: 'password'
    }
    before(() => {
      trackingService = require('../../tracking/index');
      userService = require('../../users/index');
    });
    it('Should return with status 200', (done) => {
      chai.request(server)
      .post('/')
      .send({ username: 'name', password: 'password' })
      .end((err, res) => {
        expect(err).to.not.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.deep.equal(user);
        done();
      });
    });
    it('Should return status 401 when incorrect credentials are provided', (done) => {
      chai.request(server)
      .post('/')
      .send({ username: 'name', password: 'password' })
      .end((err, res) => {
        expect(err).to.not.be.null;
        expect(res).to.have.status(401);
        done();
      });
    });
    it('Should error if no user input', (done) => {
      const app = chai.request(server)
      app
      .post('/')
      .send({ username: 'name', password: 'password' })
      .end((err, res) => {
        .then(() => {
          return app.post('/').send({ username: 'name', password: 'password' });
        })
        // x6
        .catch((err) => {
          expect(err).to.not.be.null;
          expect(res).to.have.status(401);
          done();
        });
      });
    });
  });
});
