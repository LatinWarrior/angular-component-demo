var express = require('express');
var router = express.Router();
var four0four = require('./utils/404')();
var data = require('./data');
//var restaurants = require('./api/routes/restaurants.js');


router.get('/people', getPeople);
router.get('/person/:id', getPerson);
//router.get('/restaurants', getRestaurants);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

// function getRestaurants(req, res, next){
//     console.log('In getRestaurants of routes.');
//     return restaurants.getRestaurants();
// }
