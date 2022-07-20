import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { App } from 'components/App/App';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from 'helper/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter basename='/MI_2022_Front-end_test/'>
      <App />
      </BrowserRouter>
      </ThemeProvider>
</React.StrictMode>
);
