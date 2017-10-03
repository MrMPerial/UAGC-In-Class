const chai = require('chai');
const helper = require('../helper');

const expect = chai.expect;

describe('Helper', () => {
  describe('Utility', () => {
    it('Should be an object', () => {
      expect(helper).to.be.an('object');
      expect(helper).to.have.all.keys([
        'sendRequest',
        'validateUser'
      ]);
    });
  });
  describe('sendRequest', () => {
    it('Should be a function', () => {
      expect(helper.sendRequest).to.be.a('function');
    });
    it('Should return a promise', () => {
      const result = helper.sendRequest('http://localhost:3003');
      expect(result.then).to.be.a('function');
    });
    it('Should return an object with a res and body property', (done) => {
      helper.sendRequest('http://localhost:3003').then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.all.keys([
          'res',
          'body'
        ]);
        done();
      }).catch((err) => {
        done(err);
      });
    });
    it('Should return a 404 error when calling a non-existent url', (done) => {
      helper.sendRequest('http://localhost:3001/notaurl'.then((result) => {
        
      });
    });
  });
});
