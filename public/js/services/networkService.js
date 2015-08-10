'use strict';

app.service('networkService', ['$q', '$http', function($q, $http) {

	//#####################################################
	//GET name, location, hobbies:
	//#####################################################
	this.getBasicInfo = function(info) {
		
		var url = '';

		switch (info) {
			case 'name':
				url = 'http://localhost:3000/api/name';
				break;
			case 'location':
				url = 'http://localhost:3000/api/location';
				break;
			case 'hobbies':
				url = 'http://localhost:3000/api/hobbies';
				break;
			case 'skills':
				url = 'http://localhost:3000/api/skills';
		}

		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: url 
		}).then(function(response) {
			//console.log(response.data);
			dfd.resolve(response.data);
	  	}, function(error) {
			console.log('Error: ' + error);
	  	});

  		return dfd.promise;
	};

	//#####################################################
	//GET occupations:
	//#####################################################
	this.getOccupations = function(query) {
		
		var url = '';

		switch (query) {
			case 'desc':
				url = 'http://localhost:3000/api/occupations?order=desc';
				break;
			case 'asc':
				url = 'http://localhost:3000/api/occupations?order=asc';
				break;
			case 'latest':
				url = 'http://localhost:3000/api/occupations/latest';
				break;
			default:
				url = 'http://localhost:3000/api/occupations';
		}

		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: url 
		}).then(function(response) {
			//console.log(response.data);
			dfd.resolve(response.data);
	  	}, function(error) {
			console.log('Error: ' + error);
	  	});

  		return dfd.promise;
	};


}]);