// npm requires
var mongoose = require('mongoose');

// local requires
var connections = require('./connections');

// variable declarations
var databaseUrls = [
	'mongodb://localhost/doubletest1',
	'mongodb://localhost/doubletest2'
];

// callback function declarations
var connectToDabases = function(url){
	connections.add(mongoose.createConnection(url));
};

// function declarations
var connect = function(){
	databaseUrls.forEach(connectToDabases);
};

var getConnections = function(){
	return connections;
};

// main
exports.connect = connect;
exports.get = getConnections;