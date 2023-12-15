import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import './index.css';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Projeto from './pages/Projeto';

function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/project/:name" element={ <Projeto /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
