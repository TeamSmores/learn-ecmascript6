var helpController = {};



helpController.generateHelpText = function(feature) {

	switch (feature) {

		case 'arrow function':
			return {
				name: 'Arrow functions:',
				summary: 'In ES6, you can write anonymous functions as arrow functions. Arrow syntax allows you to write shorter functions. It also sets the value of "this" within the arrow function to the context of the arrow function. ',
				url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
				linkText: 'Learn more about arrow functions.'
			}

		case 'for... of statement':
			return {
				name: 'For... of statements:',
				summary: ' As an ES5 expert, you’ve probably written a "for” statement to loop over the elements of an array. In ES6, you can use "for... of” statements to loop over any iterable object - not just arrays. For example, you can use "for... of” statement to loop over a set, a string, or the arguments object. ',
				url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of',
				linkText: 'Learn more about "for... of" statements.'
			}

		//We could add additional cases as we add additional features.
		default:
			return {
				name: 'Sorry, ',
				summary: ' I do not recognize that feature. ',
				url: '',
				linkText: ''
			}
		}
}

module.exports = helpController;



