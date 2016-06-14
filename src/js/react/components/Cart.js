'use strict';

var React = require('react');

var Product = React.createClass({
    render: function () {
          var product = this.props.product;
					return <div className="row">

						<div className="col-xs-6">
							<h4 className="product-name">{product.title}</h4>
						</div>
						<div className="col-xs-6">
							<div className="col-xs-6 text-right">
								<h6><strong>{product.price}<span className="text-muted">x</span>{product.quantity}</strong></h6>
							</div>
							<div className="col-xs-4">
								<input type="text" className="form-control input-sm" defaultValue={product.quantity}/>
							</div>
							<div className="col-xs-2">
								<button type="button" className="btn btn-link btn-xs">
									<span className="glyphicon glyphicon-trash"> </span>
								</button>
							</div>
						</div>
					</div>
				;
    }
});

var Cart = React.createClass({
    propTypes: {
        products: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            quantity: React.PropTypes.number.isRequired,
        })).isRequired,
        total: React.PropTypes.string.isRequired,
        onCheckoutClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var products = this.props.products;
        var hasProducts = products.length > 0;
        var nodes = !hasProducts ?
            <div>Please add some products to cart.</div> :
            products.map(function (p) {
                return <Product key={p.id} product={p}></Product>;
            });

        return (
          <div>{nodes}</div>
        );
    },
});

module.exports = Cart;