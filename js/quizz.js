var quizz1Button = document.getElementById('quizz1');
var quizz2Button = document.getElementById('quizz2');
var quizz3Button = document.getElementById('quizz3');

function quizz1Display(){
    $.get('quizz/quizz1.php', quizzDisplay); 
}

function quizz2Display(){
    $.get('quizz/quizz2.php', quizzDisplay); 
}

function quizz3Display(){
    $.get('quizz/quizz3.php', quizzDisplay);
}

function quizzDisplay(response){
    $('#quizzDisplay').html(response);
}

quizz1Button.addEventListener('click', quizz1Display);
quizz2Button.addEventListener('click', quizz2Display);
quizz3Button.addEventListener('click', quizz3Display);
