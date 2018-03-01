// Create the mysql connections
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost", 
	user: "root",
	password: "Gocats48!",
	database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// This exports connection for for the ORM to use.
module.exports = connection;