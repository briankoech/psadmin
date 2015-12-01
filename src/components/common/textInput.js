'use strict';

var React = require('react');

var Input = React.createClass({
	render: function() {
		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="firls">
			</div>
		);
	}
});

module.exports = Input;