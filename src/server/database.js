
(function(database){

    var MongoClient = require('mongodb').MongoClient;

    database.getDb = getDb;

    var db = null;
    // todo: get from configuration
    var mongoUrl = 'mongodb://localhost:27017/restaurants';
    var mongoOptions = {
        server: {auto_reconnect: true}
    };

    function getDb(next) {
        if (db){
            next(null, db);
        } else {
            MongoClient.connect(mongoUrl, mongoOptions, function (err, theDb){
                if (err) {
                    err.message = (err.message || '')+'. Is the MongoDb server running?';
                    next(err, null)
                } else {
                    db = theDb;
                    next(null, db);
                }
            });
        }
    }

})(module.exports);