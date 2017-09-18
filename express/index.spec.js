const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./index');
const expect = chai.expect;

const kitties = [
  {
    id: 1,
    name: 'ralph',
    breed: 'tuxedo',
    likes: ['head boops', 'laying on the couch'],
    dislikes: ['hugs']
  },
  {
    id: 2,
    name: 'lucy',
    breed: 'black tabby',
    likes: ['blankets', 'snacks'],
    dislikes: ['when other cats get pats']
  },
  {
    id: 3,
    name: 'bobby',
    breed: 'black',
    likes: ['nothing'],
    dislikes: ['everything']
  }
];

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
          .get('/kitties')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
    });
    it('should respond with the correct data', (done) => {
      chai.request(server)
          .get('/kitties')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.deep.equal(kitties);
            done();
          });
    });
  });
  describe('/tacos', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
          .get('/kitties')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
    });
    it('should respond with the correct data', (done) => {
      chai.request(server)
          .get('/kitties')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.deep.equal(kitties);
            done();
          });
    });
  });
});
