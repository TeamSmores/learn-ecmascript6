import React, { Component } from 'react';
import $ from 'jquery';
import Codemirror from 'react-codemirror';
require('./../node_modules/codemirror/mode/javascript/javascript.js');

import ES6 from './ES6';
import ToolTips from './ToolTips';

export default class ES5Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      es5code: props.initialEs5code,
      es6code: props.initialEs6code,
      features: props.initialFeatures,
      options: props.initialOptions,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Update this.state.es5code whenever the code in the Codemirror component changes
  handleChange(event) {
    this.setState({ es5code: event });
  }

  handleClick(event) {
    event.preventDefault();

    $.post('/translate', { es5code: this.state.es5code })
      // If the post request succeeds...
      .done(data => {
        // Parse the ES5 code to determine which help text to show
        let code = this.state.es5code;
        code = code.replace('\n', '').replace(/[^a-z0-9]/gi, ' ').split(' ');
        const helpTips = [];

        code.forEach((el) => {
          if (el === 'function') helpTips.push(data.features[0]);
          if (el === 'for') helpTips.push(data.features[1]);
        });

        // Update this.state.es6code with the ES6 translation and this.state.features with the
        // appropriate help text
        this.setState({
          es6code: data.es6code,
          features: helpTips,
        });
      })
      // If the post request fails, displays an error message.
      .fail(() => {
        this.setState({
          es6code: 'Uh-oh! Translation request failed.',
          features: [],
        });
      });
  }

  render() {
    return (
      <div id="state-container">
          <div id="editor-containers">
            <div id="es5-editor">
              <p>
                <strong>
                ES5 CODE:
                </strong>
              </p>
              <form>
                <Codemirror value={this.state.es5code} onChange={this.handleChange}
                  options={this.state.options}
                />
                <button onClick={this.handleClick}>Translate</button>
              </form>
            </div>
          <ES6 es5code={this.state.es5code} es6code={this.state.es6code}
            options={this.state.options}
          />
          </div>
        <ToolTips features={this.state.features} />
      </div>
    );
  }
}

ES5Editor.propTypes = {
  initialEs5code: React.PropTypes.string,
  initialEs6code: React.PropTypes.string,
  initialFeatures: React.PropTypes.array,
  initialOptions: React.PropTypes.object,
};

ES5Editor.defaultProps = {
  initialEs5code: 'Enter your ES5 code here',
  initialEs6code: 'Your code will display in ES6 here',
  initialFeatures: [
    {
      name: '',
      summary: '...and help text will appear here.',
      url: '',
      linkText: '',
    },
  ],
  // Options are for Codemirror
  initialOptions: {
    lineNumbers: true,
    mode: 'javascript',
  },
};
