var HttpServer = require('./HttpServer');

module.exports = function(options, imports, register) {
    var httpOptions = options.http;
    var server = new HttpServer(httpOptions);
    server.init();

    register(null, {
        HttpServer: server
    });
};