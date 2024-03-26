import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeContexto, darkTheme, lightTheme } from './Components/Context/theme';
import { ThemeProvider } from 'styled-components';
import { CSSGeral } from './Components/GlobalStyles/CSSGeral';
import Header from './Components/Header/Header';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/Sobre';

function App() {
    const {mode} = useContext(ThemeContexto);

    return (
        <Router>
            <ThemeProvider theme={mode? darkTheme : lightTheme}>
                <CSSGeral />
                <Header />

                <Routes>
                    <Route exact='true' path='/' element={<Home />}></Route>
                    <Route path='/Sobre' element={<Sobre />}></Route>
                    <Route path='/Projetos'></Route>
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
