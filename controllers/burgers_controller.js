/*
Below are the routes which will be needed by the app
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes when user goes to the main page
router.get('/', function (request, result) {
	result.redirect('/burgers');
});

// Route to pull all order
router.get('/burgers', function (request, result) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		result.render('index', hbsObject);
	});
});

// Route to add an order to the burger database
router.post('/burgers/create', function (request, result) {
	burger.create(['burger_name', 'devoured'], [request.body.name, request.body.devoured], function () {
		result.redirect('/burgers');
	});
});

// Route to update burger databse when order picked up
router.put('/burgers/update/:id', function (request, result) {
	var condition = 'id = ' + request.params.id;

	console.log('condition', condition);

	burger.update({ devoured: request.body.devoured }, condition, function () {
		result.redirect('/burgers');
	});
});

//Route to delete an order - Future use
router.delete('/burgers/delete/:id', function (request, result) {
	var condition = 'id = ' + request.params.id;

	burger.delete(condition, function () {
		result.redirect('/burgers');
	});
});

module.exports = router;