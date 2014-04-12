var Routing = require('./Routing');

module.exports = function(options, imports, register) {
    var db = imports.Database;
    var httpServer = imports.HttpServer;
    var routing = new Routing(db, httpServer);
    routing.init();

    register();
};