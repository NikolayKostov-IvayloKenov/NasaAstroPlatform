'use strict';

var util = require('util');
var BaseController = require('./BaseController');

var UsersController = function () {
};

util.inherits(UsersController, BaseController);

UsersController.prototype.registerRoutes = function () {
    this._http.registerRoute({
        method: 'GET',
        path: '/users',
        handler: this.handleAllUsersGet.bind(this)
    });

    this._http.registerRoute({
        method: 'POST',
        path: '/users/register',
        handler: this.handleUserRegister.bind(this)
    })
};

UsersController.prototype.handleAllUsersGet = function (req, res, next) {
    var self = this;
    var mockResponse = [{
        id: 1,
        username: 'armstrong',
        name: 'Neil Armstrong',
        active: true,
        imageUrl: '/img/profile.png',
        notifications: 0,
        wearables: []
    }];

    self._http.respondJSON(req, res, mockResponse);

//    this._db.getAll('User', function (err, data) {
//        self._http.respondJSON(req, res, data);
//    });
};

UsersController.prototype.handleUserRegister = function (req, res, next) {
    var userToRegister = req.data;
    var self = this;

    this._db.add('User', userToRegister, function(err) {
        self._http.respondJSON(req, res, 'Success!');
    });
};

module.exports = UsersController;

