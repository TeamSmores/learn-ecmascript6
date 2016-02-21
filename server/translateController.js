var esprima = require('esprima') // Esprima translates code into an AST (abstract syntax tree).
var fs = require('fs');
var es6codegen = require('es6codegen'); // Escodegen translates an AST into JavaScript. Alan and Wade forked escodegen on github and modified it so that it translates into certain ES6 features. Here we're requiring Alan and Wade's version of escodegen, not the standatd version from npm.

var translateController = {};

// This function returns a translation of the es5code, or an empty string if the es5code contains errors.
translateController.translate = function(es5code) {

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

// ID: We used this function for testing only.
translateController.fakeTranslate = function(code) {
	return 'ARROW FUNCTION ' + code + ' ARROW FUNCTION';
}

// I had trouble doing ES6-style exporting here:
module.exports = translateController;
