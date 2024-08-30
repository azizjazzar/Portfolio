import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Work/Portfolio';
import Navbar from './Work/Navbar';
import './il8n';  // Assure-toi que ton fichier de configuration i18n est correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <div>
    <Portfolio></Portfolio>

    </div>
  </React.StrictMode>
);

// Activation de l'outil de mesure des performances
reportWebVitals();
