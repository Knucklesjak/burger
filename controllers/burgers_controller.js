
// Routes that are needed by the app. Apps installed via NPM
var express = require("express"); 
var router = express.Router();
var burger = require("../models/burger.js"); 


// Calls on all burgers from the index Handlebars page
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// POST Route to add order to burger DB
router.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function(result) {

			res.json({ id: result.insertId });
		});
	});

// PUT Route to update the burger DB when order is picked up
router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if(result.changedRows === 0) {
			// Show status 404 if no rows changed because user wouldn't exist
		return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});


//DELTE Route to delete an order - Future use
// router.delete('/burgers/delete/:id', function (request, result) {
//     var condition = 'id = ' + request.params.id;

//     burger.delete(condition, function () {
//         result.redirect('/burgers');
//     });
// });

// Export the routes to the main server at server.js

module.exports = router; 