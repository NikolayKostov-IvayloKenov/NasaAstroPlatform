'use strict';

var util = require('util');
var BaseController = require('./BaseController');

var ActivitiesController = function () {
};

util.inherits(ActivitiesController, BaseController);

ActivitiesController.prototype.registerRoutes = function () {
    this._http.registerRoute({
        method: 'PUT',
        path: '/activities',
        handler: this.handleActivityPut.bind(this)
    });

    this._http.registerRoute({
        method: 'GET',
        path: '/activities',
        handler: this.handleActivityGet.bind(this)
    });
};

ActivitiesController.prototype.handleActivityPut = function (req, res, next) {
    var self = this;
    self._http.respondJSON(req, res, {Result: 'OK'});
};

ActivitiesController.prototype.handleActivityGet = function (req, res, next) {
    var self = this;
    self._http.respondJSON(req, res, [
        {
            type: "image",
            description: "Test image",
            content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
            dateCreated: new Date(Date.now())
        },
        {
            type: "text",
            description: "Test text",
            content: "This is a test text",
            dateCreated: new Date(Date.now())
        }
    ]);
};


module.exports = ActivitiesController;

