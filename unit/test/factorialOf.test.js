//const assert = require('assert');
const chai = require('chai');
const factorialOf = require('../factorialOf');

chai.should();
const expect = chai.expect;

describe('factorialOf function tests', function() {
  describe('Correct parameters', function() {
    it('should return 120 when the parameter is 5', function() {
      //assert.equal(factorialOf(5), 120);
      //factorialOf(5).should.equal(120);
      expect(factorialOf(5)).to.equal(120);
    });
    it('should return 24 when the parameter is 4', function() {
      //assert.equal(factorialOf(4), 24);
      factorialOf(4).should.equal(24);
    });
  });
  describe('Incorrect parameters', function() {
    it('should throw an error when the parameter is not a number', function() {
      //console.log(factorialOf([1, 2, 3]));
      //assert.throws(() => {
        //factorialOf([1, 2, 3])
      //}, { message: 'Invalid parameter' });
      const fn = () => { factorialOf([1, 2, 3]) };
      fn.should.throw('Invalid parameter');
    });
  });
});
