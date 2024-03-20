import { useContext } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { ThemeContexto } from "../Context/theme";
import { StyledLink } from "../GlobalStyles/LinkStyles";

const StyledHeader = styled.header`
    /* margin-top: -1px; */
    /* margin: -1px; */
    display: flex;
    flex-direction: row;
    min-height: 150px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.background1 || "#97ACDE"};
    align-items: center;
    gap: 16px;
    /* position: fixed; */
    width: 100%;
    .Logo {
        background-color: black;
        width: 100%;
        max-width: 80px;
        @media (min-width: 600px) {
            max-width: 127px;
        }
    }

    #tema2{
        width: 16px;
        background-color: transparent;
        border: none;
        margin: 20px;
        cursor: pointer;
    }

`;

export default function Header(){
    const {mode, setMode} = useContext(ThemeContexto);

    return(
        <StyledHeader>
            {/* <Logo /> */}
            <div></div>
            <Navegar />
            <AlterarTheme mode={mode} setMode={setMode} />
        </StyledHeader>
    );

}

const StyledLog = styled.div`
    margin: 10px;
`;
function Logo(){

    return(
        <StyledLog>
            <img src="/images/Logo.ico" alt="Enzo Dante Logo."/>
        </StyledLog>
    )
}
const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 1.1em;
    color: ${({theme}) => theme.textDefault || 'black'};
    padding: 10px;
    min-width: 300px;
    justify-content: space-between;
    @media (max-width: 800px){
        margin-top: 80px;
        margin-left: -50px;
        min-width: 100px;
        padding: 0px;
    }
`;
function Navegar(){


    return(
        <StyledNav>
            <StyledLink>
                <Link className="estilo1" to="/">Home</Link>
                <Link className="estilo1" to='/Sobre'>Sobre</Link>
                <Link className="estilo1" to='/Projetos'>Projetos</Link>
                <Link className="estilo1" to='/Contato'>Contato</Link>
            </StyledLink>
        </StyledNav>
    )
}

function AlterarTheme({mode, setMode}){

    return(
        <div style={{margin: "20px"}}>
            <button id="tema2" onClick={(e) => {
                setMode(status => !status);
            }}>
                <img src={mode ? "/images/brightness.png" : "/images/night-mode2.png"} alt="Alterar tema" />
            </button>
        </div>
    )
}