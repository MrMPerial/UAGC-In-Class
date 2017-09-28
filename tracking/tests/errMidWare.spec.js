const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const errorMW = require('../errMidWare');

chai.use(sinonChai);
const expect = chai.expect;

describe('Tracking Error Middleware', () => {
  const res = {
    code: null,
    status: function(codeIn) {
      this.code = codeIn;
      return this;
    },
    send: sinon.spy()
  };

  const err = 'Fake String';

  afterEach( () => {
    res.send.reset();
  });

  it('Should be a function', () => {
    expect(errorMW).to.be.a('function');
  });

  it('Should set the status code to 403', () => {
    errorMW(err, {}, res);
    expect(res.code).to.equal(403);
  });

  it('Should call res.send with the correct error message', () => {
    errorMW(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Forbidden: Fake String')).to.be.true;
  });
});
