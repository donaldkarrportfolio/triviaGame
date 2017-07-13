
var correctAnswer = [];
var questions = [];
var counter = 0;
var incorrect = 0;
var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";
var chosen;


function continueGame() {

	chosen == correctAnswer ? counter++ : incorrect++;

	$("#counter").html(counter);

	$("#incorrect").html(incorrect);

	$("#showcorrect").html(correctAnswer);

	ajax();

}

function ajax() {
	$.ajax({
	        url: queryURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

	        correctAnswer = [];
	        questions = [];

	        $("#question").html(response.results[0].question);

	        var correct = response.results[0].correct_answer;
	        correctAnswer.push(correct);
	        questions.push(correct);

	        var other1 = response.results[0].incorrect_answers[0];
	        var other2 = response.results[0].incorrect_answers[1];
	        var other3 = response.results[0].incorrect_answers[2];

	        questions.push(other1, other2, other3);

	        randomize();

	        $("#answer1").html(questions[0]);
	        $("#answer2").html(questions[1]);
	        $("#answer3").html(questions[2]);
	        $("#answer4").html(questions[3]);

	        	console.log(questions);
				console.log(correctAnswer);

	    });
}

function randomize() {
	for (var i = questions.length - 1; i > 0; i--) {
	    var j = Math.floor(Math.random() * (i + 1));
	    var temp = questions[i];
	    questions[i] = questions[j];
	    questions[j] = temp;
	}
	return questions;
}

$(document).ready(function() {

	$("#button").click(function() {
		ajax();
	});

	$("#answer1").click(function() {
		var question1 = $("#answer1").text();
		chosen = question1;
		continueGame();
		console.log(chosen);
	});

	$("#answer2").click(function() {
		var question2 = $("#answer2").text();
		chosen = question2;
		continueGame();
		console.log(chosen);
	});

	$("#answer3").click(function() {
		var question3 = $("#answer3").text();
		chosen = question3;
		continueGame();
		console.log(chosen);
	});

	$("#answer4").click(function() {
		var question4 = $("#answer4").text();
		chosen = question4;
		continueGame();
		console.log(chosen);
	});


});
