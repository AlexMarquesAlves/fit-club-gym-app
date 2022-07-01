import React from 'react';
import ReactDOM from 'react-dom/client';
import { Heading } from './components/Heading';
import { StyledThemeProvider } from './styles/styled-theme-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <Heading>Heading</Heading>
    </StyledThemeProvider>
  </React.StrictMode>,
);
