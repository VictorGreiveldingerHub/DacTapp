// == Imports globaux
import React from 'react';
import { Link } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// == Import components

// Page d'erreur 404
const P404 = () => {
  return (
    <div className="404-container">
      <h2>404</h2>
      <span>La page que vous recherchez n&apos;existe pas</span>
      <Link to="/">Retourner dans Raxie</Link>
    </div>
  );
};

export default P404;