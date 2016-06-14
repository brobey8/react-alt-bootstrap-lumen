var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');
var HomePage = require('./pages/HomePage');
var PricingPage = require('./pages/PricingPage');
var ProductsPage = require('./pages/ProductsPage');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="homePage" handler={HomePage} />
        <Route name="pricingPage" path="/pricing" handler={PricingPage} />
        <Route name="productsPage" path="/products" handler={ProductsPage} />
    </Route>
);



module.exports = routes;