var esprima = require('esprima')
var fs = require('fs');
var es6codegen = require('es6codegen'); // Substituted Alan and Wade's escodegen.js for the escodegen npm module

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
