<main class="transition">
	<section>
		<h2>Classement Confercence.</h2>
			<table>
				<thead>
					<tr>
						<th colspan="3">Classement de la <?=$conf?> 2018/2019</th>
					</tr>
					<tr>
						<th>Equipe</th>
						<th>V</th>
						<th>D</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<?php 
						foreach ($classement as $key => $value) {
							print("<tr><td><img src='img/team/".$value[2]."'><a href='rankingDetail.php?id=".$value[8]."'> ".$value[1]." ".$value[0]."</a></td>
							<td>".$value[9]."</td>
							<td>".$value[10]."</td></tr>");
						} ?>
						
					</tr>
					
				</tbody>
			</table>
			<br>
			<?php
			if ($conf == "Conference Est") {
				echo "<a href='ranking.php?conf=Conference Ouest'>Voir la Conference Ouest</a>";
			}
			if ($conf == "Conference Ouest") {
				echo "<a href='ranking.php?conf=Conference Est'>Voir la Conference Est</a>";
			}			
			?>
	</section>
</main>