<?php

$response =  file_get_contents("http://data.nba.net/data/10s/prod/v1/2019/players.json");

$response = json_decode($response);
$tab = $response->league;
var_dump($tab);
?>