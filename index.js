// npm requires
var express = require('express');
var bodyParser = require('body-parser');

// local requires
var databases = require('./database');

// variables declarations
var app;
var routes;

// function declarations

// callback function declarations
var serverStarted = function(){
	console.log('Server started on port 3003');
};

// main
app = express();

databases.connect();

routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3003, serverStarted);