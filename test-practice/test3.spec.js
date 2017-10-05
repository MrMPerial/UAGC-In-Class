const chai = require('chai');

const expect = chai.expect;

let fetchFromDatabase = function(userId) {
    const users = {
        '1': {
            name: 'Spruce'
        },
        '2': {
            name: 'Brenna'
        }
    };

    return new Promise(function(resolve, reject) {
        if (!userId && typeof userId !== 'string') {
            return reject('invalid parameters!');
        }
        const user = users[userId];
        if (user) {
            return resolve(user);
        } else {
            return reject('user not found');
        }
    });
}

describe('fetchFromDatabase', () => {
  it('Should be defined', () => {
    expect(fetchFromDatabase).to.be.a('function');
  });
  it('Should return the correct output when the input is correct', (done) => {
    fetchFromDatabase('1')
    .then((data) => {
      expect(data).to.be.deep.equal({ name: 'Spruce' });
      done();
    });
  });
  it('Should throw an error when the input is incorrect', (done) => {
    fetchFromDatabase(1)
    .then((data) => {
      done();
    .catch((data) => {
      expect(data).to.equal('user not found');
      done();
    })
    });
  });
  it('Should throw an error when the input is undefined', (done) => {

  });
});
