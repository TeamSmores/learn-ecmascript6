import React, {Component} from 'react';
import $ from 'jquery';
import ES6 from './ES6';
import ToolTips from './ToolTips';
import Codemirror from 'react-codemirror';
require('./../node_modules/codemirror/mode/javascript/javascript.js');

export default class ES5Editor extends Component {
	// I'm basing this code on https://facebook.github.io/react/docs/reusable-components.html
	constructor(props) {
		super(props); // I'm not sure exactly what this does or even if this is necessary. It looks like this.props is undefined unless passed to super: http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
		// This article may be useful: http://www.jackcallister.com/2015/08/30/the-react-quick-start-guide-es6-edition.html
		this.state = {
			es5code: props.initialEs5code,
			es6code: props.initialEs6code,
			features: props.initialFeatures
		};
	}

	handleChange(event) {
		this.setState({es5code: event});
	}

	// This function updates this.state.es6code and this.state.features when you click the button.
	handleClick(event) {

		event.preventDefault();

		$.post('/translate', {es5code: this.state.es5code})
			.done( data => {
				this.setState({
					es6code: data.es6code,
					features: data.features
				});
			})
			// Displays error message if post request fails.
			.fail( () => {
				this.setState({
					es6code: 'Uh-oh! Translation request failed.',
					features: []
				});
			})
	}

	render() {
		// TW: This is for options in CodeMirror
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
				<ToolTips features={this.state.features} />
			</div>
		);
	}
}
// ID: This link helped me with binding handleClick: https://github.com/goatslacker/alt/issues/283


ES5Editor.defaultProps = {
	initialEs5code: 'Enter your ES5 code here',
	initialEs6code: 'Your code will display in ES6 here',

	initialFeatures: {
		name: '',
		summary: '...and help text will appear here.',
		url: '',
		linkText: '',
	}
};

// Useful link: https://facebook.github.io/react/docs/forms.html
