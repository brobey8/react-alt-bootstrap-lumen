var React = require('react');
var ProductItem = require('../components/ProductItem');
var ProductList = require('../components/ProductList');
var ProductStore = require('../../flux/stores/ProductStore');
var ActionCreators = require('../../flux/actions/CartActions');
var CartContainer = require('../components/CartContainer');
var ListenerMixin = require('alt/mixins/ListenerMixin');
var NavigationTopBar = require('../components/NavigationTopBar');
var CartContainer = require('../components/CartContainer');
var Footer = require('../components/Footer');

function _getStateFromStores () {
    return ProductStore.getState();
}

var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        ActionCreators.addToCart(this.props.product);
    },
    render: function () {
        return (
          <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        ProductStore.listen(this._onChange);
    },

    componentWillUnmount: function () {
        ProductStore.unlisten(this._onChange);
    },

    render: function () {

        var nodes = this.state.products.map(function (product) {
          return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
          <span>
            <NavigationTopBar />
            <ProductList>
              {nodes}
            </ProductList>
            <CartContainer/>
            <Footer />
          </span>  
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = ProductsListContainer;