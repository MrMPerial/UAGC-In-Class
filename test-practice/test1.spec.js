const chai = require('chai');

const expect = chai.expect;

let addFunc = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('invalid parameters!');
    }
    return a + b;
};

describe('addFunc', () => {
  it('Should be defined', () => {
    expect(addFunc).to.be.a('function');
  });
  it('Should return the correct output when the input is correct', () => {
    let number = addFunc(2, 2);
    expect(number).to.be.equal(4);
  });
  it('Should throw an error when the input is incorrect', () => {
    try {
      addFunc(2, 'two');
    } catch(e) {
      expect(e).to.be.not.null;
    }
  });
  it('Should throw an error when the input is undefined', () => {
    try {
      addFunc(2);
    } catch(e) {
      expect(e).to.be.not.null;
    }
  });
});
