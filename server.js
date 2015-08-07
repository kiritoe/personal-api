'use strict';

//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Express:
var app = express();

//Port:
var port = process.argv[2] || 3000;

//Middelware:
app.use('/', bodyParser.json());
app.use('/', cors());

//Connection to server:
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});