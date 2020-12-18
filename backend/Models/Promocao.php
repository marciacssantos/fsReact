<?php

require ("Connection.php");

class Promocao{

    public $id;
    public $modelo;
    public $valor;
    public $imagem;


    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT c.modelo, p.valor, c.imagem
        FROM celular as c
        INNER JOIN preco as p
        on c.valor = p.id
        WHERE p.valor < 2000");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
