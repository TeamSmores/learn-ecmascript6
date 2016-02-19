var esprima = require('esprima')
var fs = require('fs');
var es6codegen = require('es6codegen');

var code = fs.readFileSync('code.js');

var ast = esprima.parse(code);

console.log(ast);

var output = es6codegen.generate(ast);

console.log('---');

// var asted = fs.readFileSync('code.js');
//
// var output = jstransform.transform(asted, { es6 : true, nonStrictEs6module : true });
console.log(output);
