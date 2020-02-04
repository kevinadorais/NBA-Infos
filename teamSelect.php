<?php 
include 'template/header.php' ;
include 'php/database.class.php';
$confWest = readClassement("Conference Ouest", $database);
$confEast = readClassement("Conference Est", $database);
include 'pages/teamSelect.page.php' ; 
include 'template/footer.php' ; 