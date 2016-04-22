import React from 'react';
import Codemirror from 'react-codemirror';
require('./../node_modules/codemirror/mode/javascript/javascript.js');

const ES6 = (props) => (
  <div id="ES6-editor">
    <p>
      <strong>
      ES6 Translation:
      </strong>
    </p>
    <Codemirror value={props.es6code} options={props.options} />
  </div>
);

ES6.propTypes = {
  es6code: React.PropTypes.string,
  options: React.PropTypes.object,
};

export default ES6;
