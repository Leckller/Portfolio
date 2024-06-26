import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AppProvider from './Context/AppProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
);
