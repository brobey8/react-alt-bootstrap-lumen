var React = require('react');

var ProductItem = React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            image: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            inventory: React.PropTypes.number.isRequired
        }).isRequired,
        onAddToCartClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var product = this.props.product;

        return (

    
              <div className="list-group-item">
                    <div className="col-md-9">
                        <h4 className="list-group-item-heading"> Product : <strong>{product.title}</strong> <span className="pull-right"><strong>$ {product.price}</strong></span></h4>
                        <p className="list-group-item-text"> {product.description}
                        </p>
                    </div>
                    <div className="col-md-3 text-center">
                    <button type="button" className="btn btn-default btn-lg btn-block"
                        onClick={this.props.onAddToCartClicked}
                        disabled={product.inventory > 0 ? '' : 'disabled'}>
                        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                    </button>

    
                    </div>
                    <div className="clearfix"></div>
              </div>


        );
    }
});

module.exports = ProductItem;