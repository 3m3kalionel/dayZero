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
