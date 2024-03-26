import { useEffect, useState } from "react";
import styled from "styled-components";
import jsonData from './projetosQuentes.json'; 

const StyledCarrosel = styled.div`
    div#carrosel{
        background-color: ${({theme}) => theme.backgroundForm};
        position: relative;
        /* max-width: 1000px; */
        /* background-color: red; */
        .element{
            position: relative;
            transition: opacity 0.5s ease;
            /* display: none; */
            display: block;
            margin: auto;
            width: 900px;
            background-color: ${({theme}) => theme.backgroundCarrousel};
            
            /* max-width: 200px; */
            /* min-height: 150px; */
            height: 500px;
            /* background-color: blue; */
            text-align: center;
            img{
                height: 400px;
                /* opacity: 0.7; */
            }
            #resumoA{
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                font-size: 1.1em;
                color: white;
                font-weight: bold;
                font-family: 'Roboto', sans-serif;
                background-color: ${({theme}) => theme.backgroundSpanOpaci};
            }
            #resumoA p{
                text-align: justify;
                padding: 15px;
            }

            #resumoU{
                display: flex;
                background-color: ${({theme}) => theme.backgroundCarrousel};
                height: 410px;
                align-items: center;
                p{
                    padding: 20px;
                    color: ${({theme}) => theme.textDefault};
                    font-weight: bold;
                    font-family: 'Roboto', sans-serif;
                }
            }

        }
        .normal {
            opacity: 1; /* Define a opacidade normal como 1  transicao*/
        }

        .transicao {
            opacity: 0.5; /* Define a opacidade inicial para 0 */
        }
    }
    @media (max-width: 900) {
        div#carrosel{
            max-width: 600px;
            background-color: red;
        }
    }

`;


export default function Carrosel(){

    const [imagens, setImagens] = useState(['red', 'green', 'blue', 'purple']);
    const [teste, setTeste] = useState(jsonData);
    const [i, setI] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(async () => {
            setTransitioning(true); // Ativa o efeito de transição

            setTimeout(() => {
                setI(prevCount => (prevCount + 1) % teste.length); //teste.json
                // setI(prevCount => (prevCount + 1) % imagens.length); // Incrementa o contador e reinicia se necessário
                setTransitioning(false); // Desativa o efeito de transição após um curto período de tempo
            }, 300);
            // setI(prevCount => {
            //     // Se o contador for 3, retorna 0; caso contrário, incrementa o contador
            //     return prevCount === imagens.length-1 ? 0 : prevCount + 1;
            //   }); // Incrementa o contador a cada segundo
          }, 3000);
      
          // Retorna uma função de limpeza para limpar o intervalo quando o componente é desmontado
          return () => clearInterval(interval);
    }, [])


    return(
        <StyledCarrosel>
            <h2>abaixo terá o carosel</h2>
            <div id="carrosel">
                <div className={transitioning ? "element transicao imagem" : "element normal imagem"}>
                    {teste[i]?.url ? (
                        <>
                            <img src={teste[i].url} alt="aaa" />
                            {teste[i]?.resumo && <span id="resumoA"><p>{teste[i].resumo}</p></span>}
                        </>
                    ) : (<div id="resumoU"><p>{teste[i].resumo}</p></div>)}


                    {/* <p>Contador: {i}</p> */}

                </div>
                

            </div>

            
        </StyledCarrosel>
    )

}