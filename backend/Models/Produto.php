<?php

require ("Connection.php");

class Produto
{
    public $id;
    public $categoria;
    public $descricao;
    public $preco;
    public $preco_venda;
    public $imagem;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
}