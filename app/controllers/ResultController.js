"use strict";

SurveyAppClient.controller('ResultController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope, MainFactory) {

		$scope.answerResultList = {};

		$scope.createResult = function () {

				AnswerId 
                AnswerText 
                PercentChosen

			$http({
				url:'http://localhost:50797/api/survey',
				method: 'POST',
				data: JSON.stringify($scope.answerResultList)
			})
			.success()
		};

	}

]);
