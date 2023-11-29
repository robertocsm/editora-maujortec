import React from "react";
import { Link } from "react-router-dom";
const Livro = ({ livro }) => (
    <main className="principal">
        <div className="pag-livro">
        <h2>404!</h2>
        <p>Página não encontrada ou removida. <Link to="/">Ir para Home Page</Link></p>
            <h2>{livro.titulo}</h2>
            <div className="livro">
                <img 
                    src={"/imagens/capas/" + livro.id +".jpg"}
                    alt="Thumbnail da capa do livro..." 
                />
                <ul>
                    <li>ISBN: {livro.isbn}</li>
                    <li>Ano: {livro.ano}</li>
                    <li>Páginas: {livro.paginas}</li>
                    <li>Preço: R${livro.preco},00</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>{livro.descricao}</p>
            </div>	
        </div>
    </main>		
);

export default Livro;