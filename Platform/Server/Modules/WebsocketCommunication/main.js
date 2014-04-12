var WebsocketCommunication = require('./WebsocketCommunication');

module.exports = function(options, imports, register) {
    var server = imports.HttpServer._server;

    var websocketCommunication = new WebsocketCommunication(server);
    websocketCommunication.init();

    register(null, {
        WebsocketCommunication: websocketCommunication
    });
};