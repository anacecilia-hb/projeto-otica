import React from 'react';
import './estilo.css';

export default function SecaoSobre(){
    return(
        <section id="sobre" className="secao-sobre">

            <div className="limitar-secao">

                <h2>Quem somos nós?</h2>
                <p>Fundada em 2023, pela EEEP MARWIN - Fortaleza,CE, a Óticas vida iniciou suas atividades focada no atendimento ao público de 
                    renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>


                <div className="box-container">

                    <div className="box-card">
                        <img src="./assets/imagens/loja.png" alt="loja"/>
                    </div>

                     <div className="box-card">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e América</p>
                    </div>

                    <div className="box-card">
                        <h3>Atendimento Flexível</h3>
                        <p>Nossa equipe é treinazda para te atender</p>
                    </div>

                    <div className="box-card">
                        <img src="./assets/imagens/atendimento.png" alt="atendimento"/>
                    </div>
                    
                    
                </div>

            </div>

        </section>
    );
}