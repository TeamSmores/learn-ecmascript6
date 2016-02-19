import React, {Component} from 'react';


export default class ToolTips extends Component {
  render() {
    return (
      <div id='ToolTips'>
        The code currently in the textarea is {this.props.es5code}
      </div>
    )
  }
}


