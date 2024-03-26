import styled from "styled-components";

const StyledSobre = styled.main`
    h1{
        color: ${({theme}) => theme.textDefault || 'black'};
        font-family: 'Roboto', sans-serif;
        font-weight: bold;

    }
    p{
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.textDefault || 'black'};
        text-align: justify;
        text-indent: 2em;
        max-width: 800px;
        margin: auto;
        display: block;


    }
    display: block;
    max-width: 68vw;
    min-height: 50vh;
    padding: 20px;
    background-color: ${({theme}) => theme.background2};
    margin: auto;



`;

export default function Sobre(){


    return(
        <StyledSobre>
            <h1>Sobre mim</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices mi id turpis dapibus, nec tincidunt lectus hendrerit. In sed elit lectus. Praesent imperdiet hendrerit augue vel aliquet. In hac habitasse platea dictumst. Nunc nibh dolor, ullamcorper in sapien vel, viverra sagittis dolor. In elementum tempus ex, at aliquam quam congue non. Aliquam elementum libero vel augue consequat dapibus. Curabitur a dapibus mauris.

                Praesent auctor mauris non tellus cursus commodo. Suspendisse auctor, libero maximus rutrum euismod, quam erat cursus nibh, nec feugiat felis mi id ex. Sed malesuada sit amet enim eu bibendum. Nullam luctus porttitor nisl. Donec laoreet eget felis ac porta. Integer cursus leo eu tellus blandit hendrerit. Aenean pharetra augue urna, sed elementum mauris posuere hendrerit. Quisque sagittis nisl ac lorem suscipit tincidunt. Nunc tincidunt ante nisi, ac vestibulum nibh condimentum sit amet. Suspendisse ultrices iaculis cursus. Donec sed ante ac lectus varius ornare. Duis iaculis justo eget pellentesque pellentesque. Vivamus interdum augue eros, sit amet vulputate turpis semper eget. Vivamus ullamcorper volutpat congue.

                Vestibulum quis pellentesque nisi. Cras volutpat sit amet est vitae elementum. Morbi non sodales massa, non dapibus magna. Nam enim ante, convallis id auctor sed, pulvinar nec ipsum. Curabitur auctor, ante ac pretium lobortis, lorem augue efficitur augue, quis rhoncus nunc purus non turpis. Vivamus eget magna fermentum, hendrerit ligula a, dignissim arcu. In consectetur iaculis commodo. Nullam tincidunt cursus venenatis. Ut tempor neque tortor, at condimentum enim blandit vitae. Donec sit amet mauris elit. Mauris velit nisi, porttitor ac gravida sit amet, ullamcorper nec magna. Nullam dapibus scelerisque elementum. Nam blandit consequat nisl, id consectetur quam pretium sed. Vivamus iaculis porta convallis. Pellentesque scelerisque volutpat odio eget semper.

                
            </p>



            

        </StyledSobre>
    )

}