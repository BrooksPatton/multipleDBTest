// npm requires
var mongoose = require('mongoose');

// local requires

// variable declarations
var aSchema;
var A;

// function declarations

// callback function declarations

// main
aSchema = mongoose.Schema({
	a: String,
	b: Number
});

A = mongoose.model('a', aSchema);

module.exports = A;