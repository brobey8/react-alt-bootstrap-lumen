var React = require('react');
var ReactDom = require('react-dom');

var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;



var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
          <RouteHandler {...this.props} />
        );
    }
});



module.exports = App;