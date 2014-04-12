var Database = require('./Database');

module.exports = function(options, imports, register) {
    var httpOptions = options.db;
    var db = new Database(httpOptions);
    db.init();

    register(null, {
        Database: db
    });
};