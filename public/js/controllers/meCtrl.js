'use strict';

app.controller('meCtrl', ['$scope', 'networkService', function($scope, networkService) {

	var getHobbies = function() {
		networkService.getBasicInfo('hobbies').then(function(data) {
			$scope.hobbies = data.hobbies;
		});
	};

	getHobbies();

	var getOccupations = function(order) {
		networkService.getOccupations(order).then(function(data) {
			$scope.occupations = data.occupations;
		});
	};

	$scope.getOccupations = function(order) {
		switch ($scope.order) {
			case undefined:
				networkService.getOccupations(order).then(function(data) {
					$scope.occupations = data.occupations;
				});
				break;
			case order:
				networkService.getOccupations(order).then(function(data) {
					$scope.occupations = data.occupations;
				});
		}
	};

	$scope.getOccupations($scope.order);

	var getLatestOccupation = function() {
		networkService.getOccupations('latest').then(function(data) {
			$scope.latestOccupation = data.latestOccupation;
		});
	};

	getLatestOccupation();

}]);