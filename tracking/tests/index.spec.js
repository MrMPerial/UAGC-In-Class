const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../index');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('GET /tracking', () => {
    it('Should return status of 200 and attempts are less than 6', (done) => {
      chai.request(server)
      .get('/tracking?username=chris&currentDate=2017-09-27')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Should return a status of 403 if no queries are passed', (done) => {
      chai.request(server)
      .get('/tracking')
      .end((err, res) => {
        expect(err).to.be.not.null;
        expect(res).to.have.status(403);
        done();
      });
    });
    it('Should return a status of 403 after 6 attempts', (done) => {
      const mockApp = chai.request(server);

      mockApp.get('/tracking?username=chris&currentDate=2017-09-27')
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .then( () => {
        return mockApp.get('/tracking?username=chris&currentDate=2017-09-27');
      })
      .catch( (err) => {
        expect(err).to.have.status(403);
        done();
      });
    });
  });
});
