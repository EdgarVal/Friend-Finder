let friendArray = require("../data/friends.js");

module.exports =  function(app) {
    app.get("/api/friends", function(req, res) { //this returns all the friends within the array
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
        friendArray.push(req.body);
    });
};