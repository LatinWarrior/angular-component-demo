
/*
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.DBSONPure;

var server = new Server('localhost', 27017, {
    auto_reconnect: true
});

db = new Db('restaurants', server);

db.open(function(err, db) {
    if (!err) {
        console.log("Connected to 'restaurants' database.");
        db.collection('restaurants', {
            strict: true
        }, function(err, collection) {
            if (err) {
                console.log("The 'restaurants' collection does not exist. Creating it with sample data.");
                populateDb();
            } else {
            	console.log("The 'restaurants' collection exists.");
            }
        });
    }
});

exports.getRestaurants = function(req, res){
	db.collection('restaurants', function(err, collection){
		collection.find().toArray(function(err, items){
			res.send(items);
		});
	});
};

var populateDb = function() {

    var restaurants = [{
        "address": {
            "building": "1007",
            "coord": [-73.856077, 40.848447],
            "street": "Morris Park Ave",
            "zipcode": "10462"
        },
        "borough": "Bronx",
        "cuisine": "Bakery",
        "grades": [{
            "date": {
                "$date": 1393804800000
            },
            "grade": "A",
            "score": 2
        }, {
            "date": {
                "$date": 1378857600000
            },
            "grade": "A",
            "score": 6
        }, {
            "date": {
                "$date": 1358985600000
            },
            "grade": "A",
            "score": 10
        }, {
            "date": {
                "$date": 1322006400000
            },
            "grade": "A",
            "score": 9
        }, {
            "date": {
                "$date": 1299715200000
            },
            "grade": "B",
            "score": 14
        }],
        "name": "Morris Park Bake Shop",
        "restaurant_id": "30075445"
    }, {
        "address": {
            "building": "469",
            "coord": [-73.961704, 40.662942],
            "street": "Flatbush Avenue",
            "zipcode": "11225"
        },
        "borough": "Brooklyn",
        "cuisine": "Hamburgers",
        "grades": [{
            "date": {
                "$date": 1419897600000
            },
            "grade": "A",
            "score": 8
        }, {
            "date": {
                "$date": 1404172800000
            },
            "grade": "B",
            "score": 23
        }, {
            "date": {
                "$date": 1367280000000
            },
            "grade": "A",
            "score": 12
        }, {
            "date": {
                "$date": 1336435200000
            },
            "grade": "A",
            "score": 12
        }],
        "name": "Wendy'S",
        "restaurant_id": "30112340"
    }];

    db.collection('restaurants', function(err, collection) {

        collection.insert(restaurants, {
            safe: true
        }, function(err, result) {
            // Nothing to do here yet.
        });
    });
}
*/