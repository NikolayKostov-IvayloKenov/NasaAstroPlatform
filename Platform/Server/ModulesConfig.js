var Config = require('./Common/Config');

module.exports = [
    { packagePath: "./Modules/HttpServer", http: Config.HttpServer},
    { packagePath: "./Modules/HttpServer/Routing"},
    { packagePath: "./Modules/WebsocketCommunication/"},
    { packagePath: "./Modules/Controllers/"},
    { packagePath: "./Modules/Database", db: Config.Database}
];