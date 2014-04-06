var Cluster = require('./Cluster');

module.exports = function(options, imports, register) {
    var cluster = new Cluster();

    register(null, {
        Cluster: cluster
    });
};