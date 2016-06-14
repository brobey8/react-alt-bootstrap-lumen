
var React = require('react');

var ProductList = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                  <h1 className="page-header">
                   <img src="public/image/map-logo.png"></img><span>pin<strong>trax</strong></span> : <strong>Plan </strong> + <strong> Box</strong> is all you need.
                  </h1>
              <br/>
            </div>
          </div>
          <div className="row account">
            <div className="col-lg-12">
              <div className="list-group">
                <div>{this.props.children}</div>
              </div>
            </div>
          </div>
        </div>
        );
    }
});

module.exports = ProductList;