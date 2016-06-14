var React = require('react');
var { Link } = require('react-router');
var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');
var MainCarousel = React.createClass({

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    //alert('selected=' + selectedIndex + ', direction=' + selectedDirection);
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render() {

    var slide_1 = {
      backgroundImage:'url(public/image/banner_1.jpg)'
    };

    var slide_2 = {
      backgroundImage:'url(public/image/banner_3.jpg)'
    };

    var slide_3 = {
      backgroundImage:'url(public/image/banner_4.jpg)'
    };


    return (
      <Carousel>
        <CarouselItem>
          <div className="fill" style={slide_1}></div>
          <div className="carousel-caption">
            <h2><img src="public/image/map-logo.png"></img><span>pin<strong>trax</strong></span> : track your inventory in real time</h2>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="fill" style={slide_2}></div>
          <div className="carousel-caption" >
            <h2> <img src="public/image/map-logo.png"></img><span>pin<strong>trax</strong></span> : paths, pins and reverse geo-coding</h2>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="fill" style={slide_3}></div>
          <div className="carousel-caption" >
            <h2> <img src="public/image/map-logo.png"></img><span>pin<strong>trax</strong></span> : remote and command - anywhere anytime</h2>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
});

module.exports = MainCarousel;