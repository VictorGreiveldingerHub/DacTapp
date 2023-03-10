// == Imports globaux
import React from "react";
import { Link } from "react-router-dom";

// == Import propre au component
import "./styles.css";

// == Import components

// Footer du site
const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="">
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/contact">Nous contacter</Link>
        <Link to="/faq">Foire aux questions</Link>
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
