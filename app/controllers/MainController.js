"use strict";

SurveyAppClient.controller('MainController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope, MainFactory) {
		$scope.survey = MainFactory.getsurvey();
		console.log($scope.survey);
	}
]);