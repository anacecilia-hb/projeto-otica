import React from 'react';
import './estilo.css';

export default function SecaoContato(){
    return(
        <section id="contato" className="secao-contato">

            <div className="limitar-secao,">

                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
                
                <div>

                    <div className="contato-container">
                        <div className="contato-conteudo">
                            <h4>Contato</h4>

                            <div>
                                <img src="./assets/imagens/local.png"></img>
                                <p>Fortaleza,CE</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/telefone.png"></img>
                                <p>(85)9999-9999</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/email.png"></img>
                                <p>contato@oticavida.com</p>
                            </div>
                       

                        </div>



                        <div className="contato-conteudo">
                            <h4>Nossas Redes Sociais</h4>

                            <div>
                                <img src="./assets/imagens/fb.png"></img>
                                <p>/OticaVida</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/ig.png"></img>
                                <p>@oticavidace</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/tt.png"></img>
                                <p>@oticace</p>
                            </div>

                        </div>

                    </div>

                    </div>

                </div>

        </section>
    );
}