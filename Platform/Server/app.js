var path = require('path');
var architect = require('architect');

var configPath = path.join(__dirname, "ModulesConfig.js");
var config = architect.loadConfig(configPath);

architect.createApp(config, function createArchitectAppDlg(err, app) {
    if(err) {
        console.log(err);
    } else {
        app.services.HttpServer.start();
        console.log('Server successfully started!')
    }
});