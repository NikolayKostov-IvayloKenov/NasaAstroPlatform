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

    this._http.registerRoute({
        method: 'POST',
        path: '/activities',
        handler: this.handleActivityPost.bind(this)
    });

    this._http.registerRoute({
        method: 'GET',
        path: '/activities/last',
        handler: this.handleActivityGetLast.bind(this)
    });
};

ActivitiesController.prototype.handleActivityPut = function (req, res, next) {
    var self = this;
    self._http.respondJSON(req, res, {Result: 'OK'});
};

ActivitiesController.prototype.handleActivityGet = function (req, res, next) {
    var self = this;
    this._db.getAll('Activity', function(err, data) {
       self._http.respondJSON(req, res, data);
    });
//    self._http.respondJSON(req, res, [
//        {
//            type: "image",
//            description: "Test image",
//            content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
//            dateCreated: new Date(Date.now())
//        },
//        {
//            type: "text",
//            description: "Test text",
//            content: "This is a test text",
//            dateCreated: new Date(Date.now())
//        }
//    ]);
};

ActivitiesController.prototype.handleActivityPost = function (req, res, next) {
    var self = this;
    var activity = req.body;
    activity.created_on = Date.now();
    this._db.add('Activity', activity, function (err) {
        self._http.respondJSON(req, res, 'Success');
    });
};

ActivitiesController.prototype.handleActivityGetLast = function (req, res, next) {
    var self = this;
    this._db.getLast('Activity', function (err, data) {
        var activityContent = data.content;
        self._http.respondJSON(req, res, activityContent);
    });
};

module.exports = ActivitiesController;

