// DEPENDENCIES
var friends = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // This will be used to display a JSON of all possible friends.
   app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // API POST Requests
  //This will be used to handle incoming survey results and compatibility logic.
  app.post("/api/friends", function(req, res) {
      
    //logic


});
};