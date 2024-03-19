import styled from "styled-components";

export const StyledLink = styled.a`
    a.estilo1{
        color: ${({theme}) => theme.textDefault || 'black'};
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        border-bottom-style: solid;
        border-color: transparent;
        border-radius: 5px;
        transition: linear 200ms;
        padding: 10px;
        margin: 10px;
    }

    a.estilo1:hover{
        color: ${({theme}) => theme.textNavHover || "#B3B5F5"};
        background-color: ${({theme}) => theme.backgroundNav || 'white'};
        border-bottom-color: #AAFADE;
    }

    a.estilo2{
        color: ${({theme}) => theme.textDefault2 || 'black'};
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        border-bottom-style: solid;
        border-color: ${({theme}) => theme.textDefault2 || 'black'};
        transition: linear 200ms;
        padding: 5px;

    }
    a.estilo2:hover{
        padding: 10px;
        border-radius: 5px;
        color: ${({theme}) => theme.textNavHover || "#B3B5F5"};
        background-color: ${({theme}) => theme.backgroundNav || 'white'};
        border-bottom-color: #AAFADE;
    }
`