var express = require('express');

//create our app

var app = express();

// tell the folder name which we want to expose

app.use(express.static('public'));

// start the server

app.listen(3000, function() {
    console.log("Server has been started on port 3000");
});