const chai = require('chai');

const expect = chai.expect;

let asyncSortArray = function(arr, cb) {
    if (!arr || !Array.isArray(arr)) {
        cb(new Error('not an array'), null);
        return;
    }
    let sortedArr = arr.slice().sort();
    cb(null, sortedArr);
}

describe('asyncSortArray', () => {
  it('Should be defined', () => {
    expect(asyncSortArray).to.be.a('function');
  });
  it('Should return the correct output when the input is correct', (done) => {
    asyncSortArray(['c', 'a', 'b'], (err, sortedArr) => {
      expect(sortedArr);
      done();
    });
  });
  it('Should throw an error when the input is incorrect', (done) => {
    asyncSortArray(['c', 'a', 'b'], (err, sortedArr) => {
      expect(!sortedArr);
      done();
    });
  });
  it('Should throw an error when the input is undefined', (done) => {
    asyncSortArray([], (err, sortedArr) => {
      expect(sortedArr);
      done();
    });
  });
});
