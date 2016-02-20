import React, {Component} from 'react';


export default class ToolTips extends Component {
	render() {
		return (
			<div id='helptext-container'>
				<div id='helptext'>
				<p>
					<strong>
						{this.props.feature.name}
					</strong>
						{this.props.feature.summary}
					<a href={this.props.feature.url}>
						{this.props.feature.linkText}
					</a>
				</p>
				</div>
			</div>
		)
	}
}
