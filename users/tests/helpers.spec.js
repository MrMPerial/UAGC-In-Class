const chai = require('chai');
const helpers = require('../helpers');

const expect = chai.expect;

describe('Helper Function', () => {
  describe('Validate User', () => {
    it('Should return true when a valid user object is provided', () => {
      const user = {
        username: "csmitchell",
        firstname: "chris",
        lastname: "mitchell",
        password: "password"
      };

      const results = helpers.validate(user);
      expect(results).to.equal(true);
    });
    it('Should return false if object contains an ID', () => {
      const user = {
        username: "csmitchell",
        firstname: "chris",
        lastname: "mitchell",
        password: "password",
        id: "id"
      };

      const results = helpers.validate(user.id);
      expect(results).to.equal(false);
    });
    it('Should return false when an invalid object is provided', () => {
      const user = {
        username: "",
        firstname: "",
        lastname: "",
        password: ""
      };

      const results = helpers.validate(user);
      expect(results).to.equal(false);
    });
  });
});
