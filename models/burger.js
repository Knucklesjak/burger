// Var to import ORM from ORM.js to create function that interacts with database
var orm = require("../config/orm.js");

var burger = {
	// Model calling on ORM to show all values in database
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	// Model calling ORM.js to add values to database
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	// Model calling ORM.js to update values in database
	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}

 	// // Model calling ORM.js to delete from the burger database - future use.
  //   delete: function (condition, callback) {
  //       orm.delete('burgers', condition, function (result) {
  //           callback(result);
  //       });
  //   }


};

// Export database functions for controller (burgers_controller.js).
module.exports = burger;