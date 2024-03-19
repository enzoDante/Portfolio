import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "../../Components/GlobalStyles/LinkStyles";
import { StyledMain } from "./Styles/HomeMainStyle";
import { useState } from "react";

const StyledMainBody = styled.main`
    margin: auto;
    max-width: 70vw;
    min-height: 60vh;
    background-color: ${({theme}) => theme.background2 || "white"};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 3px 3px 10px black;
    header{
        display: flex;
        padding: 10px;
        
    }
    div#foto img{
        width: 250px;
        border-radius: 30%;
        box-shadow: 3px 3px 3px #00000050;
    }
    div#resumo{
        margin-left: 1.3em;
        margin-right: 4em;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.textDefault || 'black'};
    }
    p{
        font-family: 'Roboto', sans-serif;
        text-indent: 2em;
        font-size: 1.1em;
        color: ${({theme}) => theme.textDefault || 'black'};
    }

    @media (max-width: 900px){
        max-width: 100vw;
        header{
            display: block;
            margin-bottom: 20px;
            div#foto{
                text-align: center;
            }
            h1{
                font-size: 1.5em;
            }
            p{
                font-size: 1em;
            }
        }
    }
`;

export default function Home(){
    const [expandido, setExpandido] = useState({ p1: false, p2: false });

    const AlterarExpansao = (div) => {
        setExpandido(prevState => ({
        ...prevState,
        [div]: !prevState[div]
        }));
    };


    const articleExpandida = expandido.p1 ? "Expandida" : "nExpandida";
    const article2Expandida = expandido.p2? 'Expandida' : 'nExpandida';

    return(
        <StyledMainBody>
            <header>
                <div id="foto"><img src="/images/Dante.jpeg" alt="Foto Enzo Dante" /></div>
                <div id="resumo">
                    <h1>Enzo Dante Mícoli</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio consequatur omnis beatae provident quibusdam expedita ab, totam atque cumque, blanditiis ullam iure dolor. Tempore distinctio magnam impedit reprehenderit rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae soluta, doloremque odit iste, molestiae eius culpa libero explicabo nisi dolor nostrum possimu</p>
                    <StyledLink>
                        <Link className="estilo2" to='/Sobre'>Veja mais Sobre</Link>

                    </StyledLink>
                </div>
            </header>
            <StyledMain>
                <div>
                    <div className="a">
                        <h2>Principais Linguagens</h2>
                        <span id="explp" onClick={() => {AlterarExpansao('p1')}}>{expandido.p1 ? 'Recolher' : 'Expandir'}</span>
                    </div>
                    <article id="linguagens" className={articleExpandida}>
                        <div>
                            <img src="/images/linguagens/icons8-javascript-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-c-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-c-afiado-logotipo-2-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-python-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-logo-java-coffee-cup-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/php.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-html-5-240.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/linguagens/icons8-css3-240.png" alt="" />
                        </div>
                    </article>
                </div>

                <div>
                    <div className="a">
                        <h2>Principais Ferramentas, banco de dados e ambientes de desenvolvimento</h2>
                        <span id="explp" onClick={() => {AlterarExpansao('p2')}}>{expandido.p2 ? 'Recolher' : 'Expandir'}</span>
                    </div>
                    <article id="linguagens" className={article2Expandida}>
                        <div>
                            <img src="/images/ferramentas/node.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/react.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/mysql.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/mongodb.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/xampp.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/visual-studio.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/ferramentas/visual-studio-code-2019.png" alt="" />
                        </div>
                    </article>
                </div>
            </StyledMain>
        </StyledMainBody>
    )

}