<main class="transition">
	<section>
        <h2>Selectionner une equipe.</h2>
		<table class="teamSelectTab">
            <thead>
                <tr>
                    <th colspan="5">Conference Ouest</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                for($i = 0 ; $i < count($confWest) ; $i++){
                    if($i == 0 || $i == 5 || $i == 10){
                        echo "<tr><td><a class='teamSelectLogo' href='teamDetails.php?team=". $confWest[$i][11] ."'><img src='img/team/". $confWest[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confWest[$i][11] ."'>". $confWest[$i][0] ."</a></td>" ;
                    }
                    elseif($i == 4 || $i == 9 || $i == 14){
                        echo "<td><a class='teamSelectLogo' href='teamDetails.php?team=". $confWest[$i][11] ."'><img src='img/team/". $confWest[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confWest[$i][11] ."'>". $confWest[$i][0] ."</a></td></tr>" ;
                    }
                    else{
                        echo "<td><a class='teamSelectLogo' href='teamDetails.php?team=". $confWest[$i][11] ."'><img src='img/team/". $confWest[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confWest[$i][11] ."'>". $confWest[$i][0] ."</a></td>" ;
                    }
                }
                ?>  
            </tbody>
        </table>
        <table class="teamSelectTab">
            <thead>
                <tr>
                    <th colspan="5">Conference Est</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <?php 
                for($i = 0 ; $i < count($confEast) ; $i++){
                    if($i == 0 || $i == 5 || $i == 10){
                        echo "<tr><td><a class='teamSelectLogo' href='teamDetails.php?team=". $confEast[$i][11] ."'><img src='img/team/". $confEast[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confEast[$i][11] ."'>". $confEast[$i][0] ."</a></td>" ;
                    }
                    elseif($i == 4 || $i == 9 || $i == 14){
                        echo "<td><a class='teamSelectLogo' href='teamDetails.php?team=". $confEast[$i][11] ."'><img src='img/team/". $confEast[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confEast[$i][11] ."'>". $confEast[$i][0] ."</a></td></tr>" ;
                    }
                    else{
                        echo "<td><a class='teamSelectLogo' href='teamDetails.php?team=". $confEast[$i][11] ."'><img src='img/team/". $confEast[$i][2] ."'></a>
                        <a class='hiddenTeamName' href='teamDetails.php?team=". $confEast[$i][11] ."'>". $confEast[$i][0] ."</a></td>" ;
                    }
                }
                ?>  
            </tbody>
        </table>
	</section>
</main>