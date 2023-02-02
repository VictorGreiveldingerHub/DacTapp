// == Imports globaux
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// == Import components
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Home from '../Home'; // Accueil
import Game from '../Game'; // Jeux
import SignUp from '../SignUp'; // Inscription
import SignIn from '../SignIn'; // Connexion

// Point central de l'application
const App = () => {
  return (
    <div className="application">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;