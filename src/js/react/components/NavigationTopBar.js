var React = require('react');
var { Link } = require('react-router');
var auth = require('../Utils/Auth');

var NavigationTopBar = React.createClass({

    render() {
        var extra = !auth.loggedIn() ?
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={'/pricing'}><strong>Pricing</strong></Link>
            </li>
            <li>
              <Link to={'/products'}><strong>Products</strong></Link>
            </li>
          </ul>
          :
          <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={'/remote'}><strong>Map</strong></Link>

              </li>
              <li className="separator">|</li>
              <li>
                <Link to={'/account'}><strong>Account</strong></Link>
            
              </li>
              <li className="separator">|</li>
              <li>
                <Link to={'/logout'}><strong>Logout</strong></Link>
              </li>
          </ul>;         

        return(
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container">
      
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
      
                      <span><a className="navbar-brand" href="/"><img src="public/image/map-logo.png" alt=""></img> pin<strong>trax</strong></a></span>
                  </div>
      
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                      {extra}

  
                  </div>
      
              </div>
      
          </nav>
        )
    }
});

module.exports = NavigationTopBar;