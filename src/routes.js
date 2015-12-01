"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route>
        <Redirect from="/" to="app" />
      <Route name="app" path="/app" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
        <Redirect from="about/*" to="about" />
      </Route>
      <Route name="page2" path="/page2" handler={require('./components/test/test')}>
        <Route name="page1" handler={require('./components/test/page2')} />
      </Route>
  </Route>
);

module.exports = routes;