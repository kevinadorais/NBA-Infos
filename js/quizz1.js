var score1Display = document.getElementById('score1');
var quizz1Submit = document.getElementById('quizz1Submit');

var quizz1Score = 0;

function quizz1Verify(score){
    console.log('quizz1verify');
    if ($("input[name=question1]:checked").val() == '3') {
        score++;
    }
    else{}
    if ($("input[name=question2]:checked").val() == '3') {
        score++;
    }
    else{}
    if ($("input[name=question3]:checked").val() == '2') {
        score++;
    }
    else{}
};

quizz1Submit.addEventListener('click', quizz1Verify(quizz1Score));