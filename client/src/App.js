import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeContexto, darkTheme, lightTheme } from './Components/Context/theme';
import { ThemeProvider } from 'styled-components';
import { CSSGeral } from './Components/GlobalStyles/CSSGeral';

function App() {
    const {mode} = useContext(ThemeContexto);


    return (
        <Router>
            <ThemeProvider theme={mode? darkTheme : lightTheme}>
                <CSSGeral />

                <Routes>
                    <Route exact='true' path='/'></Route>
                    {/* 
                    <Route path='/Sobre'></Route>
                    <Route path='/Blog' element={<Blog />}></Route>
                    <Route path='/Contato'></Route>
                    */}
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
