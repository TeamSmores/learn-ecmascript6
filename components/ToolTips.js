import React, {Component} from 'react';

export default class ToolTips extends Component {

  render() {

    var articles = [];

    for (var i = 0; i < this.props.features.length; i ++) {
      articles.push(
        <div id='helptext' key={i}>
          <strong>
            {this.props.features[i].name}
          </strong>
            {this.props.features[i].summary}
          <a href={this.props.features[i].url}>
            {this.props.features[i].linkText}
          </a>
        </div>
        );
    }

    return (
      <div id='helptext-container'>
        {articles}
      </div>
    )
  }
}
