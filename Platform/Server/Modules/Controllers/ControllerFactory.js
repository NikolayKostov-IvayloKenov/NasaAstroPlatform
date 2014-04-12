'use strict';

var ControllerFactory = function (db, http) {
    this._db = db;
    this._http = http;
}

ControllerFactory.prototype = {
    register: function (name) {
        var Controller = this._getControllerType(name);
        var controller = new Controller();
        controller.init.call(controller, this._db, this._http);
    },

    _getControllerType: function(name) {
        var controllerType = require('./' + name);
        return controllerType;
    }
}

module.exports = ControllerFactory;