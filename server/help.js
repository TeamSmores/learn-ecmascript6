export default function(feature) {

	switch (feature) {

		case 'arrow function':
			return {
				name: 'Arrow functions',
				summary: ' make your code more succinct and bind the value of this. ',
				url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
				linkText: 'Learn more about arrow functions.',
			}

		// This bogus case is a placeholder. We could add additional cases as we add additional features.
		case 'banana function':
			return {
				name: 'Banana functions',
				summary: ' make your code more yellow. ',
				url: 'https://en.wikipedia.org/wiki/Rosenbrock_function',
				linkText: 'Yum!',
			}

		default:
			return {
				name: 'Sorry, ',
				summary: ' I do not recognize that feature. ',
				url: '',
				linkText: '',
			}
		}

}