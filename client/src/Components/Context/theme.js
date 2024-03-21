import { createContext, useState } from "react";

export const lightTheme = {
    backgroundBase: '#f9f9f9',
    background1: '#DBF2F9', // #EBF4F8
    background2: '#f0f0f0',
    textDefault: '#2C2738',
    textDefault2: '#514766',
    textNavHover: '#B3B5F5',
    textNavHover2: '#026773',
    backgroundNav: '#2C2738',
    backgroundForm: '#F0F0E8',
    backgroundTitulo: '#4678E8',
    backgroundTitulo2: '#DEDEDE',
    backgroundForTitulo2: '#C2C2C2',
    backgroundCarrousel: '#BFBFBF',
    backgroundSpanOpaci: '#BFBFBFD0'
}

export const darkTheme = {
    backgroundBase: '#181818',
    background1: '#1C2025',
    background2: '#313131',
    textDefault: '#D6E1DF',
    textDefault2: '#CCE1DF',
    textNavHover: '#024959',
    textNavHover2: '#75BDDF',
    backgroundNav: 'white',
    backgroundForm: '#202020',
    backgroundTitulo: '#112838',
    backgroundTitulo2: '#3D3D3D',
    backgroundForTitulo2: '#474747',
    backgroundCarrousel: '#1D1D1D',
    backgroundSpanOpaci: '#1D1D1DD0'
}

export const ThemeContexto = createContext({
    mode: false,
    setMode: () => {}
})

export default function ThemeProvider({children}){
    const [mode, setMode] = useState(true);

    const ContextValue = {
        mode: mode,
        setMode: setMode
    };
    return(
        <ThemeContexto.Provider value={ContextValue} >
            {children}
        </ThemeContexto.Provider>
    );
}