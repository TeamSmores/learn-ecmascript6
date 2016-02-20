import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
require('./../node_modules/codemirror/mode/javascript/javascript.js');


export default class ES6 extends Component {
	render() {
		var options = {
			lineNumbers: true,
			mode: 'javascript'
		};

		return (
			<div id='ES6-editor'>

				<p>
					<strong>
					ES6 Translation:
					</strong>
				</p>

				<p>
				<Codemirror value={this.props.es6code} options={options} />
				</p>

			</div>
		)
	}
}
// <p>
// <strong>
// Your ES5 code (this is just to show that we are successfully updating the state and passing down props):
// </strong>
// </p>
//
// <p>
// {this.props.es5code}
// </p>
