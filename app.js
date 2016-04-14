/**
 * Created by Teddy on 4/14/2016.
 */
var express = require("express");

// create express app
var app = express();

//var bodyParser = require('body-parser');
//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// configure app
app.use(express.static('public'));
app.set('view engine', 'jade');

app.post('/solution/:input', function(req, res) {
    var inputStr = req.params.input;
    console.log(inputStr);

    getOutput(inputStr, function(output) {
       res.send(output);
    });
});

function getOutput(inputStr, callBack) {
    callBack(inputStr);
}

// open port 3000
app.listen(3000, function() {
    console.log("server listening at port 8085...");
});