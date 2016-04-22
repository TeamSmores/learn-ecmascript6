/* eslint-disable strict */
'use strict';

const esprima = require('esprima'); // Esprima translates code into an abstract syntax tree.
const es6codegen = require('es6codegen'); // Es6codegen translates an AST into JavaScript.

const translateController = {};

// Translate the user's ES5 code, or return an empty string if the ES5 code contains errors.
translateController.translate = (es5code) => {
  let response;

  try {
    const ast = esprima.parse(es5code);
    response = es6codegen.generate(ast);
  } catch (e) {
    response = '';
  } finally {
    return response;
  }
};

module.exports = translateController;
