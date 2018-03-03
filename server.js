var express = require("express"); 
var bodyParser = require("body-parser");

var port = 3000;

var app = express(); 


// This section gives static content for the app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

// Sets Handlebars;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

// Imports the routes and provides server access to them

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);