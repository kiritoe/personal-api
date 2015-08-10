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

	$scope.changeName = function() {
		networkService.updateInfo('name', {name: $scope.newName}).then(function(data) {
			$scope.name = data.name;
		});
	};

	$scope.changeLocation = function() {
		networkService.updateInfo('location', {location: $scope.newLocation}).then(function(data) {
			$scope.location = data.location;
		});
	};

}]);