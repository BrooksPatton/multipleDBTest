// npm requires

// local requires
var models = require('../models');

// variable declarations

// function declarations
var a = function(req, res, next){
	var a = new models.A(req.body);

	a.save(function(err, a){
		if(err) return next(err);

		res.json(a);
	});
};

// callback function declarations

// main
module.exports = a;