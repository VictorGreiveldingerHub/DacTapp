// == Imports globaux
import React from 'react';
import { Link } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// == Import components

// Point central de l'application
const Footer = () => {
  return (
    <div className="footer-container">
        <nav className="">
          <Link to="/mentionslegales">Mentions légales</Link>
          <Link to="/contact">Nous contacter</Link>
        </nav>
        <nav className="sites-aide">
          <h2>Pour aller plus loin</h2>
          <Link to="#">Site 1</Link>
          <Link to="#">Site 2</Link>
          <Link to="#">Site 3</Link>
        </nav>
    </div>
  );
};

export default Footer;