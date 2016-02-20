import React, {Component} from 'react';

import ES6 from './ES6';
import ToolTips from './ToolTips';

var Codemirror = require('react-codemirror');
require('./../node_modules/codemirror/mode/javascript/javascript.js');

// translate.js is a placeholder for the function Alan and Wade are writing.
import translate from './../server/translate';

// help.js is also a placeholder.
import generateHelpText from './../server/help';

export default class ES5Editor extends Component {
	// I'm basing this code on https://facebook.github.io/react/docs/reusable-components.html
	constructor(props) {
		super(props); // I'm not sure exactly what this does or even if this is necessary. It looks like this.props is undefined unless passed to super: http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
		// This article may be useful: http://www.jackcallister.com/2015/08/30/the-react-quick-start-guide-es6-edition.html
		this.state = {
			es5code: props.initialEs5code,
			es6code: props.initialEs6code,
			feature: props.initialFeature
		};
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({es5code: event});
	}

	// This function updates this.state.es6code and this.state.helpText when you click the button.
	handleClick(event) {

		event.preventDefault();

		this.setState({
			// es6code: translate(this.state.es5code), // Change this to a post request.
			// We should probably do the translation on the server side to protect the server and minimize the amount of data the user must load. Susan is checking.
			// Take me out after demo (below)
			es6code: `array.forEach((element) => { \n  console.log(element * 2);\n}`,
			// For now, I've hard-coded the name of the feature that we've translated and would like to show help text about. Eventually, I'd like to figure out how to (1) update the feature name dynamically and (2) show help text for multiple features (one div per feature). Perhaps I could do that by making generateHelpText an array?
			feature: generateHelpText('arrow function')
		});
	}

	render() {
		// console.log('state in render', this.state.es5code);
		var options = {
			lineNumbers: true,
			mode: 'javascript'
		};
		return (
			<div id='state-container'>
					<div id='editor-containers'>
						<div id='es5-editor'>
							<p>
								<strong>
								ES5 CODE:
								</strong>
							</p>
							<form>
								<Codemirror value={this.state.es5code} onChange={this.handleChange.bind(this)} options={options} />
								<button onClick={this.handleClick.bind(this)}>Translate</button>
							</form>
						</div>
					<ES6 es5code={this.state.es5code} es6code={this.state.es6code} />
					</div>
				<ToolTips feature={this.state.feature} />
			</div>
		);
	}
}


ES5Editor.defaultProps = {
	initialEs5code: 'Enter your ES5 code here',
	initialEs6code: 'Your code will display in ES6 here',

	initialFeature: {
		name: '',
		summary: '...and help text will appear here.',
		url: '',
		linkText: '',
	}
};

/* Useful links:
https://facebook.github.io/react/docs/forms.html
*/
