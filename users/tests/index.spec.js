const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../index');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Server', () => {
  describe('GET', () => {
    it('Should return a status code of 200 with the users array', () => {
      chai.request(server)
      .get('/')
      .end((req, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.deep.equal(users);
        done();
      });
    });
  });
  describe('POST', () => {
    it('Should return a status code of 200 and valid user', () => {
      chai.request(server)
      .post('/')
      .end((req, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(users).to.be('valid');
        done();
      });
    });
    it('Should return a 500 with error message', () => {
      chai.request(server)
      .post('/')
      .end((req, res) => {
        expect(res).to.have.status(500);
        expect(errorMessage).to.equal("You screwed up");
        expect(users).to.be('invalid');
        done();
      });
    });
  });
});
