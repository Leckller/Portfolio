import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppProvider from './Context/AppProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
);
