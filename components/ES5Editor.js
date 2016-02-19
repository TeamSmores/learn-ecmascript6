import React, {Component} from 'react';

import ES6 from './ES6';
import ToolTips from './ToolTips';

export default class ES5Editor extends Component {
  // I'm basing this code on https://facebook.github.io/react/docs/reusable-components.html
  constructor(props) {
  	super(props); // What does this do?
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
  	// console.log('this: ', this); // I console logged to confirm that 'this' refers to ES5Editor
  	this.setState({es5code: event.target.value});
  	// Console-log event if I can't get this to work.
  	// When I had just this.setState(state), I saw this error even when I bound: "state is not defined"
  	// console.log('Handling change! this.state is ', this.state); // I'm learning that this.state is just the default props.
  	// console.log('Handling change! this.setState is ', this.setState); // It looks like this.setState is correct...
  	// Why isn't my state changing?
  }
}

ES5Editor.defaultProps = {initialEs5code: 'Enter your ES5 code here'};

// If this doesn't work, try moving handleChange into the constructor


// {this.state.ES5input}
// Enter your code here
// Try using a submit input and then a submit button to grab the text in the textarea. We may need to save that text on change.

/* Useful links:
https://facebook.github.io/react/docs/forms.html
*/

// Notes
// error message I got from , getInitialState(): 'Cannot find module "./ES5Editor"'
// got same error message when I tried to rewrite render that way