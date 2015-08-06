// npm requires

// local requires

// variable declarations
var connections = [];

// callback function declarations

// function declarations
var add = function(db){
	connections.push(db);
};

var get = function(){
	return connections;
};

// main
exports.add = add;
exports.get = get;