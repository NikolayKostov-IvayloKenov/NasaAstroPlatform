'use strict';

var Routing = function (db, http) {
    this._http = http;
    this._db = db;
};

Routing.prototype = {
    init: function() {
        this._http.registerRoute({
            method: 'get',
            path: '/',
            handler: this.handleMainGetRequest.bind(this)
        });
    },

    handleMainGetRequest: function(req, res, next) {
        res.send('Hello!');
    }
}

module.exports = Routing;