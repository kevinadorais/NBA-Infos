<main class="transition">
    <section>
        <h2>Les dernières infos en NBA.</h2>
        <a class='infoAdd' href="infoAdd">Envoyé Une Info !</a>
        <br>
        <?php for ($i = 0; $i < count($info) ; $i++):?> 
            <article class='news'>
                <h2> <?= $info[$i]['title'] ?></h2>
                <img src='<?= $info[$i]['img'] ?>'>
                <div class="newsContent">
                    <p><?= $info[$i]['content'] ?></p>
                    <a href='infoEdit.php?id=<?= $info[$i]['infoId'] ?>'>Modifier</a> - 
                    <a href='php/infoRemoveExe.php?id=<?= $info[$i]['infoId'] ?>'>Supprimer</a>
                </div> 
            </article>
        <?php endfor;?>
        <div class='pagination'>
        <?php 
        if($page > 2){
        echo '<a href="news.php?page=1">1</a>';
        };
        if($page > 1){
        echo '<a href="news.php?page='.($page-1).'">'.($page-1).'</a>';
        };
        ?>
        ...
        <a href="news.php?page=<?php echo $page+1 ?>"><?php echo $page+1 ?></a>
        </div>
    </section>
</main>