// == Imports globaux
import React from 'react';
import { Link } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// == Import components

// Header du site
const Header = () => {
  return (
    <div className="header-container">
        <h2>Header de l'application</h2>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/game">Jeux</Link>
					<Link to="/profile">Profile</Link>
					<Link to="/signup">Inscription</Link>
					<Link to="/signin">Connexion</Link>
				</nav>
    </div>
  );
};

export default Header;