// npm requires

// local requires
var models = require('../models');

// variable declarations
var database;

// function declarations
var a = function(req, res, next){
	database = req.headers['x-flowhub-database'];

	var a = new models.A[database](req.body);

	a.save(function(err, a){
		if(err) return next(err);

		res.json(a);
	});
};

// callback function declarations

// main
module.exports = a;