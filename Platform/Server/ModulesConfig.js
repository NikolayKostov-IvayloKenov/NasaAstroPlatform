var Config = require('./Common/Config');

module.exports = [
    { packagePath: "./Modules/Cluster/"},
    { packagePath: "./Modules/HttpServer", http: Config.HttpServer}
];