
<?php
require "./Models/Promocao.php";

header("Access-Control-Allow-Origin:*");    
header("Content-type: application/json");

$promocoes = Promocao::getAll();

echo json_encode($promocoes);