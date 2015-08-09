'use strict';

app.controller('homeCtrl', ['$scope', 'networkService', function($scope, networkService) {

	var getName = function() {
		networkService.getBasicInfo('name').then(function(data) {
			$scope.name = data.name;
		});
	};

	getName();

	var getLocation = function() {
		networkService.getBasicInfo('location').then(function(data) {
			$scope.location = data.location;
		});
	};

	getLocation();

}]);