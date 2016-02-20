import React, {Component} from 'react';
import $ from 'jquery';

import ES6 from './ES6';
import ToolTips from './ToolTips';

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

  handleChange(event) {
  	this.setState({es5code: event.target.value});
  }

  // This function updates this.state.es6code and this.state.feature when you click the button.
  handleClick(event) {

  	event.preventDefault();

  	$.post('/translate', {es5code: this.state.es5code}, data => {

  		this.setState({
  			es6code: data.es6code,
  			feature: data.feature
  		});

  	});
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

// Useful link for form: https://facebook.github.io/react/docs/forms.html