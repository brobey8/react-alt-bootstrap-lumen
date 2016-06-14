var alt = require('../alt');

var SimpleActions = require('../actions/SimpleActions');

class SimpleStore {

    constructor() {
        this.bindActions(SimpleActions);
        this.store = [];
    }

    onReceiveSimpleAction(notification) {
        this.store.push(notification);
    }

    onReceiveSimpleActionError(alert) {
        this.store.push(alert);
    }
}

module.exports = alt.createStore(SimpleStore, 'SimpleActions');