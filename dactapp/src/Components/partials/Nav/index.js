// == Imports globaux
import React from "react";
import { Link } from "react-router-dom";

// == Import propre au component
import "./styles.css";

// == Import components

// Header du site
const Nav = () => {
  return (
    <nav className="navigation-container">
      <Link to="/">Accueil</Link>
      <Link to="/game">Jeux</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/signup">Inscription</Link>
      <Link to="/signin">Connexion</Link>
    </nav>
  );
};

export default Nav;
