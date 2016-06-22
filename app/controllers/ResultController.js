"use strict";

SurveyAppClient.controller('ResultController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope) {

		$scope.answerResultList = {};

		$scope.createResult = function () {

			$http({
				url:'http://localhost:50797/api/survey',
				method: 'POST',
				data: JSON.stringify($scope.answerResultList)
			})
			.success()
		};

	}

]);
