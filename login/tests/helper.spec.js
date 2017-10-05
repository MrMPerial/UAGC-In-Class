const chai = require('chai');
const mockery = require('mockery');
// or proxyquire
const helper = require('../helper');

const expect = chai.expect;

let helpers;
let requestStub;

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
    // Should actually mock this with something like sinon
    // it('Should return an object with a res and body property', (done) => {
    //   helper.sendRequest('http://localhost:3003').then((response) => {
    //     expect(response).to.be.an('object');
    //     expect(response).to.have.all.keys([
    //       'res',
    //       'body'
    //     ]);
    //     done();
    //   })
    //   .catch((err) => {
    //     done(err);
    //   });
    // });
    // Correct method
    it('Should return an object with a res and body property', () => {

    });
    it('Should return a 404 error when calling a non-existent url', (done) => {
      helper.sendRequest('http://localhost:3001/notaurl'.then((result) => {
        expect(result.statusCode).to.be(404);
      })
      .catch((err) => {
        expect(err).to.be.not.null;
        done();
      });
    });
  });
  describe('validateUser', () => {
    it('Should be a function',  () => {
      expect(helpers.validateUser).to.be.a('function');
    });
    it('Should return true if the username and passwords match', () => {
      const users = [
        {username: 'bob1', password: 'password1'},
        {username: 'bob2', password: 'password2'},
        {username: 'bob3', password: 'password3'}
      ];
      const result = helpers.validateUser(users, {username: 'bob1', password: 'password1'});
      expect(result).to.be.true;
    });
    it('Should return false if the username and passwords do not match', () => {
      const users = [
        {username: 'bob1', password: 'password1'},
        {username: 'bob2', password: 'password2'},
        {username: 'bob3', password: 'password3'}
      ];
      const result = helpers.validateUser(users, {username: 'bob1', password: 'password'});
      expect(result).to.be.false;
    });
  });
});
