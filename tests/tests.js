// testing code goes here

'use strict';

const expect = require('chai').expect;
const myApp = require('../main.js');
const getPrimes = myApp.getPrimes;


describe("should include or not include the following values", function() {

  it("should include 101 for 101", function() {
    expect(getPrimes(101)).to.include(101);
  });

  it("should include 2 for an input of 5", function() {
    expect(getPrimes(5)).to.include(2);
  });

});

describe("should deep equal the function call for the following values", function() {

  it("should return an empty array for an input of 1", function() {
    expect(getPrimes(1)).to.deep.equal([]);
  });

  it('should deep equal [2, 3, 5] for an input of 5', function () {
      expect(getPrimes(5)).to.deep.equal([2, 3, 5]);
  });

  it("should deep equal [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for an input of 50", function() {
    expect(getPrimes(50)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
  });

  it("should return an empty array for an input of []", function() {
    expect(getPrimes([])).to.deep.equal([]);
  });
  

});