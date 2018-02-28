var express = require("express"); 

var router = express.Router();

// Import the modal file - burger.js - to use the database functions.

var burger = require("../models/burger.js"); 

// Create the necessary routes and their logic where needed.
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

// Posts the new information onto the server
router.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function(result) {

			res.json({ id: result.insertId });
		});
	});

// Put router to send stuff back to front end 
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

// Export the routes to the main server at server.js

module.exports = router; 