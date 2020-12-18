<?php
require "./Models/Produto.php";

header("Access-Control-Allow-Origin:*");    
header("Content-type: application/json");

$produtos = Produto::getAll();

echo json_encode($produtos);