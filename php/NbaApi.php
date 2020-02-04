<?php
function listOfPlayersApi($team){
    $jsonPlayersApi = file_get_contents("http://data.nba.net//data/10s/prod/v1/2019/players.json") ;
    $playersApi = json_decode($jsonPlayersApi) ;
    $playersApi = $playersApi->league->standard ;
    $j = 0 ;

    for($i = 0 ; $i < count($playersApi) ; $i++ ){
        if($playersApi[$i]->teamId == $team){
            $teamRoster[$j] = $playersApi[$i] ;
            $j++ ;
        }
    }
    return $teamRoster ;
}