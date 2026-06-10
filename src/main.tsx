import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/folder/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
