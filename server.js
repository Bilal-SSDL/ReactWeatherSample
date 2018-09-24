var express = require('express');

//create our app

var app = express();
const PORT = process.env.PORT  || 3000;


app.use(function (req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

// tell the folder name which we want to expose

app.use(express.static('public'));

// start the server

app.listen(PORT, function() {
    console.log("Server has been started on port " + PORT);
});