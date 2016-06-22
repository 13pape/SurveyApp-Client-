"use strict";

let SurveyAppClient = angular.module('SurveyApp-Client-', [
	'ngRoute'
]);

SurveyAppClient.config(['$routeProvider', 
  function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/result', {
			templateUrl: 'partials/result.html',
			controller: 'ResultController'
		})
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'RegisterController'
		})
		.otherwise('/');
  }
]);