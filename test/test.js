/* Write ideas for tests here

Routes
- /translate
 - post request succeeds
 - response is an object wiht the correct properties

 Frontend
 - Page contains #main-container div
*/

/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions, no-var */
/* eslint space-before-function-paren: ["error", "never"] */

// Require modules
const expect = require('chai').expect;
var request = require('supertest');

// Require files to test
const translateController = require('./../server/translateController');
const app = require('./../server/server');
request = request(app);

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

describe('Routes', function() {
  it('get request to main route should return html', function(done) {
    request.get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('post request to /translate returns valid JSON object', function(done) {
    request.post('/translate')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        if (!res.body.es6code) throw new Error('missing es6code key');
        if (!res.body.features) throw new Error('missing features key');
      })
      .expect(200, done);
  });
});
