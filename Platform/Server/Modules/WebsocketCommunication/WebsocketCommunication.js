var WebSocketServer = require('ws').Server;

var WebsocketCommunication = function (server) {
    this._server = server;
    this._wsServer = null;
}

WebsocketCommunication.prototype = {
    init: function () {
        this._wsServer = new WebSocketServer({server: this._server});
        this._wsServer.broadcast = function (msg) {
            for (var i in this.clients) {
                this.clients[i].send(msg);
            }
        }
    },

    broadcast: function (obj) {
        var msg = JSON.stringify(obj);
        this._wsServer.broadcast(msg);
    }
}

module.exports = WebsocketCommunication;