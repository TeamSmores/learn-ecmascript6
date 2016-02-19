import React, {Component} from 'react';


export default class ES6 extends Component {
  render() {
    return (
      <div id='ES6'>
        The code currently in the textarea is {this.props.es5code}
      </div>
    )
  }
}


