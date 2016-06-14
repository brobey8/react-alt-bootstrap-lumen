var React = require('react');
var { Link } = require('react-router');


var PricingContent = React.createClass({

    render() {
        return(
     <div className="container">

   
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header"><img src="public/image/map-logo.png"></img><span>pin<strong>trax</strong></span> : Data Plans & Box
                </h1>
            </div>
        </div>
			<div className="row">
        <div className="col-lg-12">
                <div className="callout-dark text-center fade-in-b">
                  <h1>Looking to <b>Join</b> a plan or <b>Buy</b> a <b>BOX</b>? <Link className="btn btn-lg btn-success "  to={'/account'}>Login or Register</Link></h1>
                  <p>Login or Register to buy and we  ship them out to you within 24 hours.</p>
                </div>
        </div>
			</div>
        <div className="row">
            <div className="col-lg-12">
                <h3 className="page-header">Data Plans &nbsp;
                    <small>3G/GPS</small>
                </h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h3 className="panel-title">Starter</h3>
                    </div>
                    <div className="panel-body">
                        <span className="price"><sup>$</sup>4<sup>99</sup></span>
                        <span className="period">per month</span>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">Up to <strong>5</strong> BOX's</li>
                        <li className="list-group-item"><strong>Remote</strong> Application</li>
                        <li className="list-group-item"><strong>10</strong> Tracks</li>
                        <li className="list-group-item"><strong>500</strong> Pins per day</li>
                        <li className="list-group-item"> - </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-primary text-center">
                    <div className="panel-heading">
                        <h3 className="panel-title">Plus </h3>
                    </div>
                    <div className="panel-body">
                        <span className="price"><sup>$</sup>19<sup>99</sup></span>
                        <span className="period">per month</span>

                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">Up to <strong>25</strong> BOX's</li>
                        <li className="list-group-item"><strong>Remote</strong> Application</li>
                        <li className="list-group-item"><strong>100</strong> Tracks</li>
                        <li className="list-group-item"><strong>2500</strong> Pins per day</li>
                        <li className="list-group-item"><strong>10%</strong> Off Each Device</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h3 className="panel-title">Enterprise</h3>
                    </div>
                    <div className="panel-body">
                        <span className="price"><sup>$</sup>159<sup>99</sup></span>
                        <span className="period">per month</span>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">Up to <strong>250</strong> BOX's</li>
                        <li className="list-group-item"><strong>Remote + Command</strong> Applications</li>
                        <li className="list-group-item"><strong>Unlimited</strong> Tracks</li>
                        <li className="list-group-item"><strong>Unlimited</strong> Pins per day</li>
                        <li className="list-group-item"><strong>15%</strong> Off Each Device</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-12">
                <h3 className="page-header">BOX &nbsp;
                    <small>devices for applications</small>
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <span className="fa-stack fa-5x">
                              <i className="fa fa-circle fa-stack-2x text-default"></i>
                              <i className="fa fa-bicycle fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div className="panel-body">
                        <h4>BOX : <strong>COMPACT</strong></h4>
                        <span className="price"><sup>$</sup>69<sup>95</sup></span>
                        <p>The compact <strong>BOX</strong> is perfect for small vehicles that may or may not have power. It comes complete with a <strong>strap</strong> attachment and a <strong>micro usb</strong> port. Simply turn on and it will start logging your location and details to the cloud.</p>

                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <span className="fa-stack fa-5x">
                              <i className="fa fa-circle fa-stack-2x text-default"></i>
                              <i className="fa fa-trophy fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div className="panel-body">
                        <h4>BOX : <strong>SPORTS</strong></h4>
                        <span className="price"><sup>$</sup>99<sup>95</sup></span>
                        <p>The sports <strong>BOX</strong> is perfect for high intensity situations. The sealed case is <strong>water, dust and shock proof</strong>. If you are in to extreme sports or work in extreme conditions this <strong>BOX</strong> is the perfect match. 100% replacement garantee.</p> 

                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <span className="fa-stack fa-5x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-car fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div className="panel-body">
                        <h4>BOX : <strong>VEHICLE</strong></h4>
                        <span className="price"><sup>$</sup>129<sup>95</sup></span>
                        <p>The vehicle <strong>BOX</strong> is perfect for powered applications that involve <strong>OBD-II</strong>. We support all modes of operation and the set of standard PID's. 4 screw holes are provided for mounting the box internally. Plug and Play.</p> 

                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <span className="fa-stack fa-5x">
                              <i className="fa fa-circle fa-stack-2x text-default"></i>
                              <i className="fa fa-truck  fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div className="panel-body">
                        <h4>BOX : <strong>INTEGRATED</strong></h4>
                        <span className="price"><sup>$</sup>399<sup>95</sup></span>
                        <p>The integrated <strong>BOX</strong> is a modular design that can be expanded to include <strong>serial, usb and bluetooth</strong> devices.An OLED display + external cameras and sensors can then be added to log additional data to the cloud.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

        )
    }
});

module.exports = PricingContent;