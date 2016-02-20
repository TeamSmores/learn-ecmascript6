// Commit 1cc4523366705dc036f22d26af8e9f8093389cd7 added a function called index.js, but it looked identical to translateController, so I deleted it.

var esprima = require('esprima')
var fs = require('fs');
var es6codegen = require('escodegen'); // Substitute Alan and Wade's escodegen.js for the escodegen npm module, and remove that module from the package.json.

var translateController = {};

translateController.translate = function(es5code) {

	// ***Need to figure out what to do if the input is invalid.
	// If es5code is invalid (for example: 'be nice'), I get error messages in the terminal ('Error: Line 1: Unexpected identifier') and console ('POST http://localhost:3000/translate 500 (Internal Server Error)'), and I can't console-log anything below the next line.
	var ast = esprima.parse(es5code);

	return es6codegen.generate(ast);
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

translateController.fakeTranslate = function(code) {
	return 'ARROW FUNCTION ' + code + ' ARROW FUNCTION';
}

// I had trouble doing ES6-style exporting here:
module.exports = translateController;