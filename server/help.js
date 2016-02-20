var helpController = {};


helpController.helpText = [

	{
		name: 'Arrow functions:',
		summary: ' In ES6, you can write anonymous functions as arrow functions. Arrow syntax allows you to write shorter functions. It also sets the value of "this" within the arrow function to the context of the arrow function. ',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
		linkText: 'Learn more about arrow functions.'
	},

	{
		name: 'For... of statements:',
		summary: ' As an ES5 expert, you’ve probably written a "for” statement to loop over the elements of an array. In ES6, you can use "for... of” statements to loop over any iterable object - not just arrays. For example, you can use "for... of” statement to loop over a set, a string, or the arguments object. ',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of',
		linkText: 'Learn more about "for... of" statements.'
	}

];

module.exports = helpController;
