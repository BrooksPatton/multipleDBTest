// npm requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// local requires

// variable declarations
var testConnection1 = mongoose.createConnection('mongodb://localhost/test1');
var testConnection2 = mongoose.createConnection('mongodb://localhost/test2');

var app = express();

var testSchema = mongoose.Schema({
	a: String,
	b: Number
});

var Test1 = testConnection1.model('test', testSchema);
var Test2 = testConnection2.model('test', testSchema);

// function declarations

// main
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test1', function(req, res, next){
	console.log(req.body);
	var test = new Test1(req.body);

	test.save(function(err, test){
		if(err) return next(err);

		res.json(test);
	});
});

app.post('/test2', function(req, res, next){
	var test = new Test2(req.body);

	test.save(function(err, test){
		if(err) return next(err);

		res.json(test);
	});
});

app.listen(3003, function(){
	console.log('app is listening on port 3003');
});