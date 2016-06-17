"use strict";

SurveyAppClient.factory('MainFactory', function ($http) {
	
	function getsurvey() {
		$http
			.get('http://localhost:50797/api/survey')
			.success(function (surv) {
				console.log(surv);
				return surv
			});
	}
	return {
		getsurvey: getsurvey
	}
});