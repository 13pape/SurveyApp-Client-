"use strict";

SurveyAppClient.controller('MainController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope, MainFactory) {
		MainFactory.getsurvey().success(function (surv) {
				console.log(surv);
				$scope.questions = surv[0].QuestionList;
			});;
	}
]);