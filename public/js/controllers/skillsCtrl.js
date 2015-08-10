'use strict';

app.controller('skillsCtrl', ['$scope', 'networkService', function($scope, networkService) {

	var getSkills = function() {
		networkService.getBasicInfo('skills').then(function(data) {
			$scope.skills = data.skills;
		});
	};

	getSkills();

}]);