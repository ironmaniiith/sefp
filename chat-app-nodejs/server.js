/** Require calls and initializations */
var express = require('express'),
    path = require('path'),
    helper = require('./helper');

// Port on which server will run
var PORT = process.env.PORT || 8081;

/** The express app */
var app = express();

// Server html files from static folder
app.use(express.static(path.join(__dirname, 'static')));

// Search for all urls beginning with /assets in assets/ folder
app.use('/assets', express.static(path.join(__dirname, 'assets/')));

/** Cors handling */
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/** Insert the name and message in the database */
app.get('/api/insert/', function(req, res, next) {
    var name = req.param('name'),
        msg = req.param('message');

    if (!name || !msg) {
        res.send({ _err: 'Invalid name or message' });
        return;
    }
    
    helper.insertMessage(msg, name, function(status, output) {
        if (status)
            res.send({ data: output });
        else
            res.send({ _err: 'Some error occured!' });
    });
});

/** Get all the stops of a bus with the given id */
app.get('/api/getAllMessages/', function(req, res, next) {
    helper.getAllMessages(function(status, output) {
        if (status)
            res.send({ data: output });
        else
            res.send({ _err: err });
    });
});

/** Listen on PORT */
app.listen(PORT, function() {
    console.log('Listening on port', PORT);
});
