var quizz1Button = document.getElementById('quizz1');
var quizz2Button = document.getElementById('quizz2');
var quizz3Button = document.getElementById('quizz3');

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



quizz1Button.addEventListener('click', quizz1Display);
quizz2Button.addEventListener('click', quizz2Display);
quizz3Button.addEventListener('click', quizz3Display);
