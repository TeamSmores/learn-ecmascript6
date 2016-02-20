// Commit 1cc4523366705dc036f22d26af8e9f8093389cd7 added a function called index.js, but it looked identical to translateController, so I deleted it.

var esprima = require('esprima')
var fs = require('fs');
var es6codegen = require('es6codegen'); // Substituted Alan and Wade's escodegen.js for the escodegen npm module, and remove that module from the package.json.

var translateController = {};

// console.log(typeof es6codegen.generate(esprima.parse('var x = 5'))); // string
/* For testing only
console.log('begin');
console.log(esprima.parse('var x = 5', {tolerant: true}));
// Error seems to happen here
console.log(esprima.parse('hi there', {tolerant: true}));
console.log('end');
*/

/* For testing only
Eventually wrap this in function

var es5code = 'hey hey';


var response;

try {
	var ast = esprima.parse(es5code);
	response = es6codegen.generate(ast);
}
catch(e) {
	console.log('error: ', e);
	response = 'wah-wah';
}
finally {
	console.log('response: ', response);
}
*/

translateController.translate = function(es5code) {

	// ***Need to figure out what to do if the input is invalid. Could I use status codes?
	// If es5code is invalid (for example: 'be nice'), I get error messages in the terminal ('Error: Line 1: Unexpected identifier') and console ('POST http://localhost:3000/translate 500 (Internal Server Error)'), and I can't console-log anything below the next line.
	// var ast = esprima.parse(es5code);
	// return es6codegen.generate(ast);

	var response;

	try {
		var ast = esprima.parse(es5code);
		response = es6codegen.generate(ast);
	}
	catch(e) {
		response = '';
	}
	finally {
		return response;
	}

}

/* Old code

var code = fs.readFileSync('code.js');

var ast = esprima.parse(code);

// console.log(JSON.stringify(ast.body[1]));

var output = es6codegen.generate(ast);

console.log('---');

// var asted = fs.readFileSync('code.js');
//
// var output = jstransform.transform(asted, { es6 : true, nonStrictEs6module : true });
console.log(output);

*/

// ID: We used this function for testing only.
translateController.fakeTranslate = function(code) {
	return 'ARROW FUNCTION ' + code + ' ARROW FUNCTION';
}

// I had trouble doing ES6-style exporting here:
module.exports = translateController;
