// npm requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// local requires
var routes = require('./routes');

// variables declarations
var app;

// function declarations

// callback function declarations
var serverStarted = function(){
	console.log('Server started on port 3003');
};

// main
app = express();

mongoose.connect('mongodb://localhost/doubleTest');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3003, serverStarted);