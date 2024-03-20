import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCarrosel = styled.div`
    div#carrosel{
        .element{
            transition: opacity 0.5s ease;
            /* display: none; */
            display: block;
            
            /* max-width: 200px; */
            height: 150px;
            background-color: blue;

        }
        .normal {
            opacity: 1; /* Define a opacidade normal como 1  transicao*/
        }

        .transicao {
            opacity: 0.5; /* Define a opacidade inicial para 0 */
        }
    }

`;


export default function Carrosel(){

    const [imagens, setImagens] = useState(['red', 'green', 'blue', 'purple']);
    const [i, setI] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true); // Ativa o efeito de transição

            setTimeout(() => {
                setI(prevCount => (prevCount + 1) % imagens.length); // Incrementa o contador e reinicia se necessário
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
                <div className={transitioning ? "element transicao imagem" : "element normal imagem"}> <p>Contador: {i}</p> <p>{imagens[i]}</p> </div>
                

                {/* {imagens.map((a) => {


                    return (
                        <div className="element"> {a} </div>
                    )
                })} */}

            </div>

            
        </StyledCarrosel>
    )

}