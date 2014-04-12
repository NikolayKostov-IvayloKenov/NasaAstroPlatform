'use strict';

var BaseController = function() {
    this._db = null;
    this._http = null;
    this._ws = null;
};

BaseController.prototype = {
    init: function(db, http, ws) {
        this._db = db;
        this._http = http;
        this._ws = ws;
        this.registerRoutes();
    },

    registerRoutes: function() {
        throw new Error('Not implemented');
    }
};

module.exports = BaseController;