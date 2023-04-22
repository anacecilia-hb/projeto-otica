import React from 'react';
import './estilo.css';

export default function Topo(){
    return(
        <header>

            <div className="limitar-secao">

                <img src="./assets/imagens/logo.png" alt="logo"/>
                
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
                
            </div>

        </header>
    );
}