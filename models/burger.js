// Var to import ORM from ORM.js to create function that interacts with database
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	// Variable columns and values that are arrays
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export database functions for controller (burgers_controller.js).
module.exports = burger;