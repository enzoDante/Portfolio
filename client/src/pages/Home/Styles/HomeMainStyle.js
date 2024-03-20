import styled from "styled-components";

export const StyledMain = styled.main`
    min-height: 70vh;
    margin-bottom: 25px;
    padding-bottom: 10px;
    div{
        background-color: ${({theme}) => theme.backgroundForTitulo2 || 'black'};
    }

    .a{
        position: relative;
        display: flex;
        background-color: ${({theme}) => theme.backgroundTitulo2 || 'black'};
        align-items: center;
    }
    h2{
        position: relative;
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.textDefault || 'black'};
        padding-left: 20px;
        padding: 20px;
        /* max-width: 800px; */
        /* background-color: red; */
        /* background-color: ${({theme}) => theme.backgroundTitulo2 || 'white'}; */

        margin-bottom: -15px;
        flex: 2;
    }
    #explp{
        height: 30px;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.textDefault || 'black'};
        cursor: pointer;
        /* margin-left: 45vw; */
        margin-right: 5vw;
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
        position: relative;
        /* justify-content: space-between; */
        display: flex;
        flex-wrap: wrap;
        /* gap: 2px; */
        padding: 20px;
        padding-left: 50px;
        min-width: 200px;
        /* min-height: 17vh; */        
        overflow: hidden;
        margin-top: 10px;
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
    @media (max-width: 900px){
        article#linguagens{

            div img{
                width: 50px;
            }
        }
    }
    @media (max-width: 1200px){
        h2{
            font-size: 1.3em;
        }
        #explp{
            height: 20px;
        }
    }
`;