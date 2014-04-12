'use strict';

var BaseController = function() {
    this._db = null;
    this._http = null;
};

BaseController.prototype = {
    init: function(db, http) {
        this._db = db;
        this._http = http;
        this.registerRoutes();
    },

    registerRoutes: function() {
        throw new Error('Not implemented');
    }
};

module.exports = BaseController;