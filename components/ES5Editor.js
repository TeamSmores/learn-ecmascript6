import React, {Component} from 'react';

import ES6 from './ES6';
import ToolTips from './ToolTips';

export default class ES5Editor extends Component {
  // I'm basing this code on https://facebook.github.io/react/docs/reusable-components.html
  constructor(props) {
  	super(props); // I'm not sure exactly what this does or even if this is necessary. It looks like this.props is undefined unless passed to super: http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
  	// This article may be useful: http://www.jackcallister.com/2015/08/30/the-react-quick-start-guide-es6-edition.html
  	this.state = {es5code: props.initialEs5code};
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
        	<input type='submit' value='Translate' />
        </form>
        <ES6 es5code={this.state.es5code} />
        <ToolTips es5code={this.state.es5code} />
      </div>
    );
  }

  handleChange(event) {
  	this.setState({es5code: event.target.value});
  }
}

ES5Editor.defaultProps = {initialEs5code: 'Enter your ES5 code here'};

// Try using a submit input and then a submit button to grab the text in the textarea. We may need to save that text on change.

/* Useful links:
https://facebook.github.io/react/docs/forms.html
*/