var React = require('react');
var { Link } = require('react-router');

var Footer = React.createClass({
    render() {
        return(
          <div className="container">
            <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p></p>
                  </div>
              </div>
            </footer>
          </div>
        )
    }
});

module.exports = Footer;