// DEPENDENCIES
var path = require("path");
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
      
    //Variables
    var scores = req.body.scores;
    var match;
    var matchIndex=0;
    var matchTotal =0;
    var scoreTotal=0;
    
    
    // Loop through friends list
    for (var i= 0; i < friends.length; i++) {
            for(var k = 0; k < scores.length; k++){

            // Loop through the scores 
            scoreTotal += (Math.abs(parseInt(friends[i].scores[k])) - parseInt(scores[k]));
        }

        // Find the closest score
        if (matchTotal >= scoreTotal) {
            matchTotal = scoreTotal;
            matchIndex = i;
        }  
    }
        // Return matched friend
       match =  friends[matchIndex];
       res.json(match);

       //Add new person to the list    
       friends.push(req.body);     
});
};