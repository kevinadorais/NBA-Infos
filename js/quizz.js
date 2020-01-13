var quizz1Button = document.getElementById('quizz1');
var quizz2Button = document.getElementById('quizz2');
var quizz3Button = document.getElementById('quizz3');

var quizz1Submit = document.getElementById('quizz1Submit');

var score1Display = document.getElementById('score1');

var resultDisplay = document.getElementById('resultDisplay');

var quizz1Score = 0;

function quizz1Display(){
    console.log('quizz1selected');
    $.get('quizz/quizz1.php', quizzDisplay);
}

function quizz2Display(){
    console.log('quizz2selected');
}

function quizz3Display(){
    console.log('quizz3selected');
}

function quizzDisplay(response){
    $('#quizzDisplay').html(response);
}

function quizz1Verify(){
    console.log('quizz1Verify');
    let score = 0;
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
    if ($("input[name=question4]:checked").val() == '3') {
        score++;
    }
    else{}
    if ($("input[name=question5]:checked").val() == '3') {
        score++;
    }
    else{}
    if ($("input[name=question6]:checked").val() == '3') {
        score++;
    }
    else{}
    if ($("input[name=question7]:checked").val() == '2') {
        score++;
    }
    else{}
    if ($("input[name=question8]:checked").val() == '1') {
        score++;
    }
    else{}
    if ($("input[name=question9]:checked").val() == '4') {
        score++;
    }
    else{}
    if ($("input[name=question10]:checked").val() == '1') {
        score++;
    }
    else{}
    console.log(score);
    $.get('quizz/quizzResult.php', quizzDisplay);
    score1Display.innerHTML = score + ' / 10';

    if(score <= 4 || score == 0){
        resultDisplay.innerHTML = "Dommage tu n'as fait que " + score + " bonnes réponse sur 10 entraîne toi et reessaye."
        score1Display.setAttribute("class", "badRate")
    }
    if(score >= 5 && score <= 7){
        resultDisplay.innerHTML = "Pas mal, tu as " + score + " bonnes réponse sur 10 entraîne toi et reessaye."
        score1Display.setAttribute("class", "middleRate")
    }
    if(score >= 8){
        resultDisplay.innerHTML = "Excellent, tu as " + score + " bonnes réponse sur 10 Felicitation !"
        score1Display.setAttribute("class", "goodRate")
    }
}

quizz1Button.addEventListener('click', quizz1Display);
quizz2Button.addEventListener('click', quizz2Display);
quizz3Button.addEventListener('click', quizz3Display);
quizz1Submit.addEventListener('click', quizz1Verify);
