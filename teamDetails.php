<?php 
include 'template/header.php' ;
include 'php/database.class.php' ;
include 'php/NbaApi.php' ;
$team = $_GET['team'] ;
$teamRoster = listOfPlayersApi($team) ;
$selectedTeam = readTeamByApiTeamId($team, $database) ;
include 'pages/teamDetails.page.php' ; 
include 'template/footer.php' ; 