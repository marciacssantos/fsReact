import { useState, useEffect } from 'react';

import Produto from '../Components/Produto';
import { Container, Row } from 'react-bootstrap';
function Produtos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost/react-php/backend/index.php")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);


    return (
        <Container>
            <Row>
                <div className="container col-3"><br/> <br/> <br/>
                    <h2 className="h2">Categorias</h2><br/>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" >Todos(12)</a>
                        <a href="#" className="list-group-item list-group-item-action">Geladeira(3)</a>
                        <a href="#" className="list-group-item list-group-item-action">Fogão(2)</a>
                        <a href="#" className="list-group-item list-group-item-action">Microondas(3)</a>
                        <a href="#" className="list-group-item list-group-item-action">Lavadora(2)</a>
                        <a href="#" className="list-group-item list-group-item-action">Lava-louça(2)</a>
                    </div>
                </div>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} categoria={item.categoria} preco={item.preco} preco_venda={item.preco_venda} />)}
            </Row>
        </Container>

    )
}

export default Produtos;
