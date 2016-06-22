"use strict";

SurveyAppClient.controller('MainController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope, MainFactory) {
		$scope.results = null;


		MainFactory.getsurvey().success(function (surv) {
				console.log(surv);
				$scope.ages = surv.AgeList;
				$scope.sexes = surv.SexList;
				$scope.questions = surv.Survey.QuestionList;

				console.log($scope.ages);
			});

		$scope.resetAnswers = function () {
			$scope.results = null;
		}


		$scope.saveAnswers = function () {
			console.log("button");

			var selectedSexId = $('input:checked', '#optionsRadiosSex')[0].value;
			console.log('sexid:', selectedSexId);

			var selectedAgeId = $('input:checked', '#optionsRadiosAge')[0].value;
			console.log('AgeId:', selectedAgeId);


			var answerObject = {
				SexId: selectedSexId,
				AgeId: selectedAgeId,
				UserAnswerList: []
			}

			for (var i=0; i<$scope.questions.length; i++){
				var questionId = $scope.questions[i].QuestionId;
				var selectedAnswerId = $('input:checked', `#radioAnswer${questionId}`)[0].value;
				// console.log(questionId, parseInt(selectedAnswerId));
				var obj = {
							AnswerId: parseInt(selectedAnswerId)
						}

				answerObject.UserAnswerList.push(obj);
			}
			
			console.log(answerObject);
			

			// POST api connection 
      		$http({
				url:'http://localhost:50797/api/survey',
				method: 'POST',
				data: answerObject,
				dataType: JSON,
				contentType: 'application/json; charset=utf-8'
			}).success( (results) => {
				console.log(results);
				$scope.results = results;
			});
			/* 
			answerObject = {
				SexId: 1,
				AgeId: 3,
				questionAnswerPairs: [
					{
						QuestionId: 1,
						AnswerId: 7
					},
					{
						QuestionId: 4,
						AnswerId: 9
					},
					{
						QuestionId: 10,
						AnswerId: 56
					}
				]
			}
			*/

			//var selectedAnswerId = $("#formId, input:checked").val()

			//loop through $scope.questions
				//for each question id, select the corresponding form by id (using jquery)
					//for each form, select the checked answer value
						// add question id, answer id pairs

			//CODE BELOW THIS LINE

      		//$http({
				//url:'http://localhost:50797/api/survey',
				//method: 'POST',
				//data: JSON.stringify($scope.saveAnswers)
			//})

      		
			
		}
	}
]);





   
      

