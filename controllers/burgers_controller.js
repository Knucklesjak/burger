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

// Posts results from the model