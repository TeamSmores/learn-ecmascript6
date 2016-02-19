var esprima = require('esprima')
var fs = require('fs');
var es6codegen = require('escodegen');

var code = fs.readFileSync('code.js');

var ast = esprima.parse(code);

// console.log(JSON.stringify(ast.body[1]));

var output = es6codegen.generate(ast);

console.log('---');

// var asted = fs.readFileSync('code.js');
//
// var output = jstransform.transform(asted, { es6 : true, nonStrictEs6module : true });
console.log(output);
