import React, {Component} from 'react';


export default class ToolTips extends Component {
  render() {
    return (
      <div id='ToolTips'>
        {this.props.features}
      </div>
    )
  }
}

/* old code
        <p>
          <strong>
            {this.props.features.name}
          </strong>
            {this.props.features.summary}
          <a href={this.props.features.url}>
            {this.props.features.linkText}
          </a>
        </p>
*/