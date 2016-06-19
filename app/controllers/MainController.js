"use strict";

SurveyAppClient.controller('MainController',[
	'$http', 
	'$scope',
	'MainFactory',

	function ($http, $scope, MainFactory) {
		MainFactory.getsurvey().success(function (surv) {
				console.log(surv);
				$scope.ages = surv.AgeList;
				$scope.sexes = surv.SexList;
				$scope.questions = surv.Survey.QuestionList;

				console.log($scope.ages);
			});


		$scope.saveAnswers = function () {
			console.log("button");

			var selectedSexId = $('input:checked', '#optionsRadiosSex')[0].value;
			console.log('sexid:', selectedSexId);

			var selectedAgeId = $('input:checked', '#optionsRadiosAge')[0].value;
			console.log('AgeId:', selectedAgeId);

			var answerObject = {
				SexId: selectedSexId,
				AgeId: selectedAgeId,
				SurveyUserId: -1
			}
			for (var i=0; i<$scope.questions.length; i++)
			{
				var questionId = $scope.questions[i].QuestionId;
				var answerId = (radioAnswer + questionId).checked.AnswerId;
				answerObject.UserAnswerList.add(
					{ 
						QuestionId: questionId,
						AnswerId: answerId,
						SurveyUserId: -1
					 });
			}
			console.log("saving answers");
			// POST api connection 
      		$http({
				url:'http://localhost:50797/api/survey',
				method: 'POST',
				data: JSON.stringify($scope.saveAnswers)
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





   
      

