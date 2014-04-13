'use strict';

var util = require('util');
var BaseController = require('./BaseController');

var AstronautsController = function () {
};

util.inherits(AstronautsController, BaseController);

AstronautsController.prototype.registerRoutes = function () {
    this._http.registerRoute({
        method: 'GET',
        path: '/astronauts',
        handler: this.handleAllAstronautsGet.bind(this)
    });

    this._http.registerRoute({
        method: 'POST',
        path: '/astronauts',
        handler: this.handleAstronautsPost.bind(this)
    });

    this._http.registerRoute({
        method: 'GET',
        path: '/astronauts/:username',
        handler: this.handleAstronautGetByUsername.bind(this)
    });
};

AstronautsController.prototype.handleAllAstronautsGet = function (req, res, next) {
    var self = this;

    this._db.getAll('Astronaut', function (err, data) {
        self._http.respondJSON(req, res, data);
    });
};

AstronautsController.prototype.handleAstronautsPost = function (req, res, next) {
    var astronaut = req.body;
    var self = this;

    this._db.add('Astronaut', astronaut, function(err) {
        self._http.respondJSON(req, res, 'Success');
    });
};

AstronautsController.prototype.handleAstronautGetByUsername = function (req, res, next) {
    var astronaut = req.body;
    var username = req.route.params.username;
    var self = this;

    this._db.get('Astronaut', {username: username}, function(err, data) {
        self._http.respondJSON(req, res, data);
    });
};

module.exports = AstronautsController;