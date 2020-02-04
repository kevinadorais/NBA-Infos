<?php include 'template/header.php';
$conf = $_GET['conf'];
include 'php/database.class.php';
$classement = readClassement($conf, $database);
include 'pages/ranking.page.php'; 
include 'template/footer.php'; 