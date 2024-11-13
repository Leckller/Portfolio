import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import './index.css';

const Theme = {};

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <ThemeProvider theme={ Theme }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
