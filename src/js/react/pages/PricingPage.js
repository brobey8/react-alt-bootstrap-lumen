var React = require('react');

var NavigationTopBar = require('../components/NavigationTopBar');
var PricingContent = require('../components/PricingContent');
var Footer = require('../components/Footer');

var PricingPage = React.createClass({

    render() {
        return (
        <span>
          <NavigationTopBar />
          <PricingContent />
          <Footer />
        </span>
        );
    }
});

module.exports = PricingPage;