/* eslint-disable react/no-unescaped-entities */


// == Imports globaux
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// == Import component
import App from './Components/App';

// == Import propre au fichier
import './reset.css';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
