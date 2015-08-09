'use strict';

app.controller('meCtrl', ['$scope', 'networkService', function($scope, networkService) {

	var getHobbies = function() {
		networkService.getBasicInfo('hobbies').then(function(data) {
			$scope.hobbies = data.hobbies;
		});
	};

	getHobbies();

	var getOccupations = function() {
		networkService.getOccupations('').then(function(data) {
			$scope.occupations = data.occupations;
		});
	};

	getOccupations();
}]);