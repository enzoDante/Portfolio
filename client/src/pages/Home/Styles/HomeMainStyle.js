import styled from "styled-components";

export const StyledMain = styled.main`
    min-height: 50vh;
    div{
        background-color: ${({theme}) => theme.backgroundForTitulo2 || 'black'};
    }

    h2{
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.textDefault || 'black'};
        padding-left: 20px;
        padding: 20px;
        background-color: ${({theme}) => theme.backgroundTitulo2 || 'white'};
        margin-bottom: -15px;
    }
    #explp{
        cursor: pointer;
        margin-left: 45vw;
        border-bottom-style: solid;
        transition: linear 200ms;
        padding: 10px;
        border-radius: 5px;
    }
    #explp2{
        position: absolute;
        cursor: pointer;
        margin-left: 15vw;
        border-bottom-style: solid;
        transition: linear 200ms;
        padding: 10px;
        border-radius: 5px;
    }
    #explp:hover{
        color: ${({theme}) => theme.textNavHover || "#B3B5F5"};
        background-color: ${({theme}) => theme.backgroundNav || 'white'};
        border-bottom-color: #AAFADE;
    }
    .nExpandida{
        height: 17vh;
    }
    .Expandida{
        /* min-height: 20vh; */
        /* height: auto; */
        /* min-height: 100vh; */
    }

    article#linguagens{
        /* justify-content: space-between; */
        display: flex;
        flex-wrap: wrap;
        /* gap: 2px; */
        padding: 20px;
        padding-left: 50px;
        min-width: 200px;
        /* min-height: 17vh; */        
        overflow: hidden;
        margin-bottom: 5px;
        /* cursor: pointer; */
        transition: height 0.3s ease;

        div{
            background-color: blue;
            margin: 10px;
            background-color: ${({theme}) => theme.backgroundForm || 'black'};
            border-radius: 15px;

        }
        div img{
            width: 150px;
        }
    }
    

`;