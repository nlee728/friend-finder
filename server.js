// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

//Sets initial port (or lets Heroku choose)
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER to start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
