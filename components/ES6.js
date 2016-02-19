import React, {Component} from 'react';


export default class ES6 extends Component {
  render() {
    return (
      <div id='ES6'>

	      <p>
	      	<strong>
	      	Your ES5 code (this is just to show that we are successfully updating the state and passing down props):
	      	</strong>
      	</p>

      	<p>
	      	{this.props.es5code}
      	</p>

      	<p>
	      	<strong>
	      	ES6 translation:
	      	</strong>
      	</p>
	      	
	      <p>
	      	{this.props.es6code}
      	</p>

      </div>
    )
  }
}
