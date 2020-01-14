var score1Display = document.getElementById('score1');
var quizz1Submit = document.getElementById('quizz1Submit');

function quizz1Verify(){
    console.log('quizz1Verify');
    let score = 0;
    if ($("input[name=question1]:checked").val() == '3') {
        score++;
    }       
    if ($("input[name=question2]:checked").val() == '3') {
        score++;
    }
    if ($("input[name=question3]:checked").val() == '2') {
        score++;
    }
    if ($("input[name=question4]:checked").val() == '3') {
        score++;
    }
    if ($("input[name=question5]:checked").val() == '3') {
        score++;
    }
    if ($("input[name=question6]:checked").val() == '3') {
        score++;
    }
    if ($("input[name=question7]:checked").val() == '2') {
        score++;
    }
    if ($("input[name=question8]:checked").val() == '1') {
        score++;
    }
    if ($("input[name=question9]:checked").val() == '4') {
        score++;
    }
    if ($("input[name=question10]:checked").val() == '1') {
        score++;
    }

    console.log(score);
    score1Display.innerHTML = score + ' / 10';
    $('#quizzDisplay').empty();
    
    if(score >= 8){
        score1Display.setAttribute("class", "goodRate");
        quizzResult.innerHTML = "Excellent, tu as " + score + " bonnes réponse sur 10 Felicitation !";
    } 
    else if(score >= 5 && score <= 7){
        score1Display.setAttribute("class", "middleRate");
        quizzResult.innerHTML = "Pas mal, tu as " + score + " bonnes réponse sur 10 entraîne toi et reessaye.";
    }
    else if(score <= 4 || score === 0){
        score1Display.setAttribute("class", "badRate");
        $('#quizzDisplay').append("<div>Dommage tu n\'as fait que " + score + " bonnes réponse sur 10 entraîne toi et reessaye.</div>");
    }
    else{
        quizzResult.innerHTML = "Un problème est survenu ! " + score;
    }
}

quizz1Submit.addEventListener('click', quizz1Verify);
