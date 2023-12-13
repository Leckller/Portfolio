import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import './index.css';
import Layout from './components/Layout';
import Projetos from './pages/Projetos';

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
          <Route path="/projetos" element={ <Projetos /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
