'use strict';

var express = require('express');
var http = require('http')

var HttpServer = function(options) {
    this._options = options;
    this._app = null;
    this._server = null;
};

HttpServer.prototype = {
    init: function() {
        this._app = express();
        this._server = http.createServer(this._app);
        this._app.use(express.bodyParser({ keepExtensions: true, uploadDir: this._options.uploadDir }));
    },

    start: function() {
        var port = this._options.port;
        this._server.listen(port);
    },

    registerRoute: function (routeOptions) {
        var action = this._resolveAction(routeOptions.method);

        var args = [];
        args.push(routeOptions.path);

        if (routeOptions.middleware) {
            args.push(routeOptions);
        }

        args.push(routeOptions.handler);

        action.apply(this._app, args);
    },

    respondJSON: function (req, res, obj) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(obj));
    },

    _resolveAction: function (verb) {
        var verbToLower = verb.toLowerCase();

        switch (verbToLower) {
            case 'post':
                return this._app.post;
            case 'get':
                return this._app.get;
            case 'put':
                return this._app.put;
            case 'delete':
                return this._app.delete;
            default:
                throw new Error('Not supported method');
        }
    }
};

module.exports = HttpServer;