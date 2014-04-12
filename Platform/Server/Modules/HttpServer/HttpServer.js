'use strict';

var express = require('express');
var http = require('http');
var WebSocketServer = require('ws').Server;

var HttpServer = function (options) {
    this._options = options;
    this._app = null;
    this._server = null;
};

HttpServer.prototype = {
    init: function () {
        this._app = express();
        this._server = http.createServer(this._app);
        this._app.use(express.bodyParser({ keepExtensions: true, uploadDir: this._options.uploadDir }));
        this._app.use(this._allowCors);
    },

    _allowCors: function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        else {
            next();
        }
    },

    start: function () {
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
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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