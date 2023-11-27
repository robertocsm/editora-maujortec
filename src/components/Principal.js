import React from "react";
import Home from "./Home";
const tituloPagina = "Últimos lançamentos";
const dados = [
    {img:"imagens/capas/9788575228142.jpg",isbn:"978-85-7522-xxx-x",titulo:"Padrões para Kubernetes",autor:"XXXXXX",desc:"O modo como os ..."},
    {img:"imagens/capas/9788575228074.jpg",isbn:"978-85-7522-776-3",titulo:"Indrodução ao Pentest - 2ª Edição",autor:"XXXXXX",desc:"Indrodução ao Pentest ..."}
]
const Principal = () => {
    return(
        <main className="principal">
            <Home dados={dados} tituloPagina={tituloPagina} />
        </main>
    );
}

export default Principal;