import React, {Component} from 'react';

import ES6 from './ES6';
import ToolTips from './ToolTips';

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
  }

  render() {
    return (
      <div id='ES5Editor'>
        <form>
        	<textarea
        		name='es5code'
        		value={this.state.es5code}
        		// This link helped me with the next line: https://github.com/goatslacker/alt/issues/283
        		onChange={this.handleChange.bind(this)}>
      		</textarea>
        	<button onClick={this.handleClick.bind(this)}>Translate</button>
        </form>
        <ES6 es5code={this.state.es5code} es6code={this.state.es6code} />
        <ToolTips feature={this.state.feature} />
      </div>
    );
  }

  handleChange(event) {
  	this.setState({es5code: event.target.value});
  }

  // This function updates this.state.es6code and this.state.helpText when you click the button.
  handleClick(event) {

  	event.preventDefault();

  	this.setState({
  		es6code: translate(this.state.es5code),

  		// For now, I've hard-coded the name of the feature that we've translated and would like to show help text about. Eventually, I'd like to figure out how to (1) update the feature name dynamically and (2) show help text for multiple features (one div per feature). Perhaps I could do that by making generateHelpText an array?
  		feature: generateHelpText('arrow function')
  	});
  }
}


ES5Editor.defaultProps = {
	initialEs5code: 'Enter your ES5 code here',
	initialEs6code: 'When you click the button, your translated code will appear here...',

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