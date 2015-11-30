(function() {
  'use strict';

  var React = require('react');
  var Router = require('react-router');
  var DefaultRoute = Router.DefaultRoute;
  var Route = Routers.Route;

  var routes = (
  	<Route name="app" path="/" handler={require('')}>
  		<DefaultRoute handler={require('./components/homePage')} />
  		<Route name="authors" handler={require('./components/authors/authorPage')} />
  		<Route name="about" handler={require('./components/about/aboutPage')} />
  	</Route>
  );

  module.exports = routes;
})();
