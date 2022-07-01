import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledThemeProvider } from './styles/styled-theme-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <StyledThemeProvider>
         <App />
      </StyledThemeProvider>
   </React.StrictMode>,
);
