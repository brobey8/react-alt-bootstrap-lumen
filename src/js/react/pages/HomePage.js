var React = require('react');

var NavigationTopBar = require('../components/NavigationTopBar');
var MainCarousel = require('../components/MainCarousel');
var MainContent = require('../components/MainContent');
var Footer = require('../components/Footer');

var HomePage = React.createClass({

    render() {
        return (
        <span>
          <NavigationTopBar />
          <header id="myCarousel" className="carousel slide">
            <MainCarousel />
          </header>
          <MainContent />
          <Footer />
        </span>
        );
    }
});

module.exports = HomePage;