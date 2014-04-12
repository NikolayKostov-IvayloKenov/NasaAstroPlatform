'use strict';

var util = require('util');
var BaseController = require('./BaseController');

var AstronautsController = function () {
};

util.inherits(AstronautsController, BaseController);

AstronautsController.prototype.registerRoutes = function() {
    this._http.registerRoute({
        method: 'GET',
        path: '/astronauts',
        handler: this.handleAllAstronautsGet.bind(this)
    });
};

AstronautsController.prototype.handleAllAstronautsGet = function(req, res, next) {
    var self = this;

    var mockResponse = [{
        id: 1,
        username: 'hansen',
        name: 'Jeremy Hansen',
        active: false,
        imageUrl: '/img/hansen.jpg',
        activities: [{
            type: "image",
            description: "Test image",
            content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
            dateCreated: new Date(Date.now())
        },{
            type: "text",
            description: "Test text",
            content: "This is a test text",
            dateCreated: new Date(Date.now())
        }]
    },{
        id: 2,
        username: 'wiseman',
        name: 'Gregory Wiseman',
        active: true,
        imageUrl: '/img/wiseman.jpg',
        activities: [{
            type: "image",
            description: "Test image",
            content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
            dateCreated: new Date(Date.now())
        },{
            type: "text",
            description: "Test text",
            content: "This is a test text",
            dateCreated: new Date(Date.now())
        }]
    },{
        id: 3,
        username: 'rubins',
        name: 'Kathleen Rubins',
        active: true,
        imageUrl: '/img/rubins.jpg',
        activities: [{
            type: "image",
            description: "Test image",
            content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
            dateCreated: new Date(Date.now())
        },{
            type: "text",
            description: "Test text",
            content: "This is a test text",
            dateCreated: new Date(Date.now())
        }]
    }];

    self._http.respondJSON(req, res, mockResponse);

//    this._db.getAll('Astronauts', function (err, data) {
//        self._http.respondJSON(req, res, data);
//    });
};

module.exports = AstronautsController;