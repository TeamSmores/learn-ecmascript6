/* Write ideas for tests here

Routes
- main
 - get request succeeds
 - response is html
- /translate
 - post request succeeds
 - response is an object wiht the correct properties

 Frontend
 - Page contains #main-container div
*/

/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */
/* eslint space-before-function-paren: ["error", "never"] */

// Require modules
const expect = require('chai').expect;
const request = require('supertest');

// Require files to test
const translateController = require('./../server/translateController');
const app = require('./../server/server');

describe('translateController', function() {
  it('should translate one-line anonymous functions into one-line arrow functions', function() {
    const es5code =
`myArray.map(function(el) {
  return el * 2;
});`;
    const es6code = 'myArray.map((el) => el * 2);';
    expect(translateController.translate(es5code)).to.equal(es6code);
  });

  it('should translate multi-line anonymous functions into multi-line arrow functions', function() {
    const es5code =
`myArray.map(function(el, index) {
  console.log(index);
  return el * 2;
});`;
    const es6code =
`myArray.map( (el, index) => {
    console.log(index);
    return el * 2;
});`;
    expect(translateController.translate(es5code)).to.equal(es6code);
  });

  it('should translate a for loop into a "for... of" statement', function() {
    const es5code =
`for (var i = 0; i < myArray.length; i ++) {
  console.log(myArray[i]);
}`;
    const es6code =
`for (var i of myArray) {
    console.log(myArray[i]);
}`;
    expect(translateController.translate(es5code)).to.equal(es6code);
  });

  it('should return an empty string if the ES5 code submitted is invalid', function() {
    const es5code = 'invalid code';
    expect(translateController.translate(es5code)).to.equal('');
  });
});
