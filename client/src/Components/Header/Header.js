import { useContext } from "react";
import styled from "styled-components";
import { ThemeContexto } from "../Context/theme";

const StyledHeader = styled.header`
    /* margin-top: -1px; */
    /* margin: -1px; */
    display: flex;
    flex-direction: row;
    min-height: 80px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.background1 || "#97ACDE"};
    align-items: center;
    gap: 16px;
    /* position: fixed; */
    width: 100%;
    .logo {
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
        margin: 10px;
        cursor: pointer;
    }

`;

export default function Header(){
    const {mode, setMode} = useContext(ThemeContexto);

    return(
        <StyledHeader>
            <Logo />

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