const chai = require('chai');
const users = require('../users');

const expect = chai.expect;

describe('Users Module', () => {
  it('Should be an array', () => {
    expect(users).to.be.an('array');
  });
  it('Should have 5 users', () => {
    expect(users.length === 5).to.be.true;
  });
});
