var React = require('react');
var router = require('./react/router');
var ReactDOM = require('react-dom');

router.run((Handler, state) => {
    ReactDOM.render(<Handler {...state} />,  document.getElementById('body'));
});