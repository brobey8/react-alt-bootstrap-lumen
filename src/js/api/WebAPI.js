var axios = require('axios');
var SimpleActions = require('../flux/actions/SimpleActions');
var CartActions = require('../flux/actions/CartActions');

// Emulate API requests
class WebApi {

    // API requests using the Promise interface
    // TODO: caching data that has already been received from the server
    static getSimpleAction(){
        return new Promise(function(resolve, reject) {
            axios.get('/remote',{transformRequest: axios.defaults.transformRequest.concat(function (data, headers) {
              headers['Authorization'] = 'Bearer ' +localStorage.token;
              })}).then(function (response) {
              resolve(response.data.data);
            })
            .catch(function (response) {
              reject(response.data);
            });
        });
    }

    static getProducts(){
        return new Promise(function(resolve, reject) {
            axios.get('/remote').then(function (response) {
              console.log("success");
              CartActions.receiveProducts(response.data);
            })
            .catch(function (response) {
              console.log("reject");
              reject(response.data);
            });
        });
    }
}

module.exports = WebApi;