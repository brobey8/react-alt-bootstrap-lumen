var React = require('react');
var Cart = require('../components/Cart.js');
var CartStore = require('../../flux/stores/CartStore');
var CartActions = require('../../flux/actions/CartActions');

function _getStateFromStores () {
    return {
        products: CartStore.getAddedProducts(),
        total: CartStore.getTotal()
    };
}

var CartContainer = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentWillMount:function(){
      CartActions.requestProducts();
    },

    componentDidMount: function () {
        
        CartStore.listen(this._onChange);
    },

    componentWillUnmount: function () {
        CartStore.unlisten(this._onChange);
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        //CartActions.cartCheckout(this.state.products);
    },

    render: function () {
        return (
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <div className="panel-title">
                    <div className="row">
                      <div className="col-xs-9">
                        <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                      </div>
                      <div className="col-xs-3">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
                </div>
                <div className="panel-footer">
                  <div className="row text-center">
                    <div className="col-xs-9">
                      <h4 className="text-right">Total <strong>{this.state.total} </strong></h4>
                    </div>
                    <div className="col-xs-3">
                      <button className="btn btn-success btn-block" onClick={this.onCheckoutClicked} >Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = CartContainer;