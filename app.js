/**
 * Created by Teddy on 4/14/2016.
 */
var express = require("express");

// create express app
var app = express();

// configure app
app.use(express.static('public'));


app.get('/solution/:input', function(req, res) {
    var inputStr = req.params.input;

    getOutput(inputStr, function(output) {
        res.header("Content-Type", "application/json");
        res.header("Accept", "application/json");
        res.send(JSON.stringify(output, null, 4));
    });
});

function getOutput(inputStr, callBack) {
    var output;


    if(inputStr.indexOf(".") >= 0) { // a floating point input or anything with a period
        output = [];
    } else if(isNaN(inputStr)) { // not an number
        output = [];
    } else {
        var number = parseInt(inputStr);
        output = extract10Substrings(number);
    }

    callBack(output);
}

function extract10Substrings(number) {
    if(number <= 10) {
        return [];
    } else {
        var tenSubs = getAllNumSubstrings(number);
        return tenSubs;
    }
}

function getAllNumSubstrings(number) {
    var result = [];
    console.log(number);
    for(var i = 0; i <= number; i++) {
        if(digitsSumIs10(i)) {
            result.push(i);
        }
    }
    console.log(result);

    return result;
}

function digitsSumIs10(num) {
    var result;

    var numStr = num.toString();
    var sum = 0;

    for(var i = 0; i < numStr.length; i++){
        sum += parseInt(numStr[i]);
    }

    if(sum == 10) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
exports.digitsSumIs10;

function errorHandler(err, req, res, next) {
    console.log('error handler: ' + res);
    res.status(500);
    res.render('error', { error: err });
}

// open port 3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('server listening at: ' + host + '/' + port);
});

module.exports = server;