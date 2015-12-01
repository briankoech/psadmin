/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>This is another page</h1>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;