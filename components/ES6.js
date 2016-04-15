import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
require('./../node_modules/codemirror/mode/javascript/javascript.js');

// Welcome to the ES6 Component, friend.

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

        <Codemirror value={this.props.es6code} options={options} />

      </div>
    )
  }
}
