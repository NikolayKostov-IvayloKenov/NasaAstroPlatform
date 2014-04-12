'use strict';

var mongoose = require('mongoose');
var User = require('./Models/User');

var Database = function(options) {
    this._options = options;
    this._models = {};
}

Database.prototype = {
    init: function() {
        mongoose.connect(this._options.host);
        this._models.User = User;
    },

    getAll: function(type, callback) {
        this._models[type].find(callback);
    },

    add: function(type, data, callback) {
        var typeModel = new this._models[type](data);
        typeModel.save(callback);
    }
};

module.exports = Database;