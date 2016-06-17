"use strict";

SurveyAppClient.factory('MainFactory', function ($http, $q) {
	//return {
// 		 function getsurvey() {
// 			var deferred = $q.defer();
// 		$http
// 			.get('http://localhost:50797/api/survey')
// 			.success(function (surv) {
// 				deferred.resolve({
// 					//console.log(surv);
// 				// 
// 				//);
// 				return deferred.promise;
// 			});
// 	}
//  	return {
//  		getsurvey: getsurvey()
// // }
// }
// });


function getsurvey() {
		return $http.get('http://localhost:50797/api/survey');
	}


	return {
		getsurvey: getsurvey
	}
});