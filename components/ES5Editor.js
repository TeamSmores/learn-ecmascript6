import React, {Component} from 'react';

import ES6 from './ES6';
import ToolTips from './ToolTips';

export default class ES5Editor extends Component {
  render() {
    return (
      <div id='ES5Editor'>
        ES5Editor
        <ES6 />
        <ToolTips />
      </div>
    )
  }
}


