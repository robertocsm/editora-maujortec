import React from "react";
const Livro1 = () => (
    <main className="principal">
        <div className="pag-livro">        
            <h2>Aqui entra o título do livro<br /><small>Página para efeito de exemplo</small></h2>
            <div className="livro">
                <img 
                    src={"/imagens/capas/padrao.jpg"}
                    alt="Thumbnail da capa do livro..." 
                />
                <ul>
                    <li>Autor: Maurício Samy Silva</li>
                    <li>ISBN:  978-85-7522-438-0</li>
                    <li>Ano: 2015</li>
                    <li>Páginas: 304</li>
                    <li>Preço: R$ 69,00</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id rhoncus augue lorem eget elit. Ut sollicitudin sodales purus. Phasellus libero felis, blandit nec, commodo ut, imperdiet ut, nibh. Suspendisse potenti.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id rhoncus augue lorem eget elit.</p>
            </div>	
        </div>
    </main>		
    
);

export default Livro1;