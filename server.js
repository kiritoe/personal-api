'use strict';

//#####################################################
//Personal Information:
//#####################################################
var name = {name: 'Philipp Schulte'};
var location = {location: 'Provo, UT'};
var hobbies = ['Programming', 'Fussball', 'Ping Pong'];
var occupations = ['Student', 'Bridge Engineer', 'Student'];
var mentions = ['https://www.linkedin.com/pub/philipp-schulte/b5/9b4/180'];
var references = ['Polina Marchenko', 'Reinhard Schulz', 'Michael Fischer'];

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//#####################################################
//Express:
//#####################################################
var app = express();

//#####################################################
//Port:
//#####################################################
var port = process.argv[2] || 3000;

//#####################################################
//Middelware:
//#####################################################
app.use('/', bodyParser.json());
app.use('/', cors());

//#####################################################
//Routes:
//#####################################################

//GET /api/name:
app.get('/api/name', function(req, res) {
	res.json(name);
});

//GET /api/location:
app.get('/api/location', function(req, res) {
	res.json(location);
});

//GET /api/hobbies:
app.get('/api/hobbies', function(req, res) {
	res.json({hobbies: hobbies});
});

// We don't need this anymore!!!
//GET /api/occupations:
// app.get('/api/occupations', function(req, res) {
// 	res.json({occupations: occupations});
// });

//GET /api/occupations/latest:
app.get('/api/occupations/latest', function(req, res) {
	res.json({latestOccupation: occupations[occupations.length - 1]});  
});

//GET /api/occupations: (Postman: localhost:3000/api/occupations?order=asc)
app.get('/api/occupations', function(req, res) {
	switch (req.query.order) {
		case 'desc':
			res.json({occupations: occupations.sort().reverse()});
			break;
		case 'asc':
			res.json({occupations: occupations.sort()});
			break;
		default:
			res.json({occupations: occupations});
	}
});

//PUT /api/name:
app.put('/api/name', function(req, res) {
	name = req.body;
	res.json(name);
});

//PUT /api/location:
app.put('/api/location', function(req, res) {
	location = req.body;
	res.json(location);
});

//POST /api/hobbies:
app.post('/api/hobbies', function(req, res) {
	hobbies.push(req.body.hobbies);
	res.json({hobbies: hobbies});
});

//POST /api/occupations:
app.post('/api/occupations', function(req, res) {
	occupations.push(req.body.occupations);
	res.json({occupations: occupations});
});

//#####################################################
//Starting server:
//#####################################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});