<main class="transition">
    <section>
        <h2>Detail de l'equipe.</h2>
        <table>
            <thead>
                <tr>
                    <th colspan="9">Effectif des <?= $selectedTeam[0][1] ." ". $selectedTeam[0][0] ."<img src='img/team/". $selectedTeam[0][2] ."'>" ?></th>
                </tr>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Date de Naissance</th>
                    <th>Taille</th>
                    <th>Poid</th>
                    <th>Années Pro</th>
                    <th>N° Draft</th>
                    <th>Provenance</th>
                    <th>Poste</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach($teamRoster as $key => $value){
                    echo "<tr><td>". $value->firstName ."</td>
                    <td>". $value->lastName ."</td>
                    <td>". $value->dateOfBirthUTC ."</td>
                    <td>". $value->heightMeters ."</td>
                    <td>". $value->weightKilograms ."</td>
                    <td>". $value->yearsPro ."</td>
                    <td>". $value->draft->pickNum ."</td>
                    <td>". $value->collegeName ."</td>";

                    if($value->pos == "G"){
                        echo "<td> AR </td></tr>";
                    }
                    else if($value->pos == "F"){
                        echo "<td> INT </td></tr>";
                    }
                    else if($value->pos == "C"){
                        echo "<td> P </td></tr>";
                    }
                    else if($value->pos == "G-F"){
                        echo "<td> AR - INT </td></tr>";
                    }
                    else if($value->pos == "F-G"){
                        echo "<td> INT - AR </td></tr>";
                    }
                    else if($value->pos == "F-C"){
                        echo "<td> INT - P </td></tr>";
                    }
                    else if($value->pos == "C-F"){
                        echo "<td> P - INT </td></tr>";
                    }
                }
                ?>
            </tbody>
        </table>
    </section>
</main>