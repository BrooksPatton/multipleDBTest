// npm requires
var mongoose = require('mongoose');

// local requires
var databases = require('../database');

// variable declarations
var aSchema;
var A;
var connections;;
var models = {};

// callback function declarations
var createModel = function(db){
	var databaseName = db.name;

	models[databaseName] = db.model('a', aSchema);
};

// function declarations
var createModels = function(){
	connections = databases.get();

	connections.forEach(createModel);
};

var get = function(){
	return models;
};

// main
aSchema = mongoose.Schema({
	a: String,
	b: Number
});

createModels();

exports.get = get;