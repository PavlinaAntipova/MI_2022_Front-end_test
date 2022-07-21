import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { App } from 'components/App/App';
import './index.css';


import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter basename='/MI_2022_Front-end_test/'>
      <App />
      </BrowserRouter>

);
