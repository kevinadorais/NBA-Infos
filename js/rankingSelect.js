// Variables

var leftLogo = document.getElementById('confWest');
var rightLogo = document.getElementById('confEast');
var leftDiv = document.getElementById('confWestColored');
var rightDiv = document.getElementById('confEastColored');

// Fonctions

function leftColorChange(){
leftDiv.classList.add("westColor");
}

function leftColorReturn(){
leftDiv.classList.remove('westColor');
}

function rightColorChange(){
rightDiv.classList.add('eastColor');
}

function rightColorReturn(){
rightDiv.classList.remove('eastColor');
}

// Code

leftLogo.addEventListener('mouseenter', leftColorChange);
leftLogo.addEventListener('mouseout', leftColorReturn);

rightLogo.addEventListener('mouseenter', rightColorChange);
rightLogo.addEventListener('mouseout', rightColorReturn);