// Variables

var toggleButton1 = document.getElementById('toggleButton1');
var secondToggleButton1 = document.getElementById('secondToggleButton1');
var toggleButton2 = document.getElementById('toggleButton2');
var secondToggleButton2 = document.getElementById('secondToggleButton2');
var Navbar1 = document.getElementById('Navbar1');
var Navbar2 = document.getElementById('Navbar2');


// Fonctions

function toggleNavbar1 (event){
    event.preventDefault();
    Navbar1.classList.toggle('hiddenNavbar');
    secondToggleButton.classList.toggle('hiddenNavbar');
    }

function toggleNavbar2 (event){
    event.preventDefault();
    Navbar2.classList.toggle('hiddenNavbar');
    secondToggleButton.classList.toggle('hiddenNavbar');
    }

// Code

toggleButton1.addEventListener('click', toggleNavbar1);
secondToggleButton1.addEventListener('click', toggleNavbar1);
toggleButton2.addEventListener('click', toggleNavbar2);
secondToggleButton2.addEventListener('click', toggleNavbar2);