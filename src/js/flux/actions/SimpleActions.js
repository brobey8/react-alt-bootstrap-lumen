var alt = require('../alt');
var WebAPI = require('../../api/WebAPI');

class SimpleActions {
    constructor() {
        this.generateActions(
            'receiveSimpleAction',
            'receiveSimpleActionError'
        );
    }

    requestSimpleAction() {

        var actionDispatcher = this;
        actionDispatcher.dispatch();
        WebAPI.getSimpleAction().then(function() {
            actionDispatcher.actions.receiveSimpleAction();
        }).catch(function(error) {
            actionDispatcher.actions.receiveSimpleActionError();
        });

    }

}

module.exports = alt.createActions(SimpleActions);


