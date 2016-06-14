var alt = require('../alt');
var WebAPIUtils = require('../../api/WebAPI');

class ActionsCreators {
    constructor() {
        this.generateActions(
            'receiveProducts',
            'receiveProductsError',
            'addToCart',
            'finishCheckout'
        );
    }

    requestProducts() {
        // Have to reference "this" so we can call
        // our own actions inside the promise return
        var actionDispatcher = this;

        // Call this action
        actionDispatcher.dispatch();

        // Promise is returned, when resolved call the received bean list action
        WebAPIUtils.getProducts().then(function(products) {
            console.log("success");
            actionDispatcher.actions.receiveProducts(products);

        }).catch(function(error) {
            console.log("error");
            actionDispatcher.actions.receiveProductsError();
        });

    }
}

alt.createActions(ActionsCreators, exports);