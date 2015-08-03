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

var databases = {
	Test1: testConnection1.model('test', testSchema),
	Test2: testConnection2.model('test', testSchema)
};

// function declarations

// main
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test', function(req, res, next){
	var test = new databases[req.headers['x-flowhub-database']](req.body);

	test.save(function(err, test){
		if(err) return next(err);

		res.json(test);
	});
});

app.listen(3003, function(){
	console.log('app is listening on port 3003');
});