// This will import the MySQL connection 
var connection = require("../config/connection.js");

// This is the helper function that places the question marks needed
// for SQL queries to pass. 

function printQuestionMarks(num) {
	var arr = [];
// for loop to run through array to add question markrs
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
// Returns array to string
	return arr.toString();
}

// Converts object key and value pairs to SQL syntax via Helper function

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		var value = ob[key];

		if (Object.hasOwnProperty.call(ob, key)) {

			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}

			arr.push(key + "=" + value);
		}
	}

	return arr.toString();
}

// Object for all our SQL statement functions. 

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	create: function(table, cols, vals, cb) {
		console.log(table, cols, vals, cb);
		var queryString = "INSERT INTO " + table; 

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},

	// (name: burger, devoured: true)
	update: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
    	queryString += objToSql(objColVals);
    	queryString += " WHERE ";
    	queryString += condition;

    	console.log(queryString);
    	connection.query(queryString, function(err, result) {
      		if (err) {
        		throw err;
      		}

      	cb(result);
    	});
	}
};

// Export the orm object for the model (burger.js).

module.exports = orm; 