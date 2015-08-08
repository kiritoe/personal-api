'use strict';

var app = angular.module('personalApi', ['ngRoute']);

app.config(function($routeProvider) {

  	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
		  	controller: 'homeCtrl',  
		})
	    .when('/me', {
	  		templateUrl: './views/me.html',
	  		controller: 'meCtrl',
	  	})
	    .when('/skills', {
	  		templateUrl: './views/skills.html',
	  		controller: 'skillsCtrl',
	  	})
	  	.otherwise({
	    	redirectTo: '/'
	});

});