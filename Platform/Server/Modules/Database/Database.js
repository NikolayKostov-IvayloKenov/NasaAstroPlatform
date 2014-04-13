'use strict';

var mongoose = require('mongoose');
var User = require('./Models/User');
var Activity = require('./Models/Activity');
var Astronaut = require('./Models/Astronaut');

var Database = function(options) {
    this._options = options;
    this._models = {};
}

Database.prototype = {
    init: function() {
        mongoose.connect(this._options.host);
        this._models.User = User;
        this._models.Activity = Activity;
        this._models.Astronaut = Astronaut;
    },

    getAll: function(type, callback) {
        var DataType = this._getDataType(type);
        DataType.find(callback);
    },

    add: function(type, data, callback) {
        var DataType = this._getDataType(type);
        var typeModel = new DataType(data);
        typeModel.save(callback);
    },

    get: function(type, expression, callback){
        var DataType = this._getDataType(type);
        DataType.findOne(expression, function(err, result){
            callback(err, result);
        });
    },

    getLast: function(type, callback) {
        var DataType = this._getDataType(type);
        DataType.findOne({}, {}, { sort: { 'created_on' : -1 } }, function(err, result) {
            callback(err, result);
        });
    },

    _getDataType: function(type) {
        return this._models[type];
    }
};

module.exports = Database;