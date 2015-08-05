// npm requires
var express = require('express');

// local requires
var controllers = require('../controllers');

// variable declarations
var router = express.Router();

// function declarations

// callback function declarations

// main
router.post('/a', controllers.a);

module.exports = router;