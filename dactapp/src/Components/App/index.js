// == Imports globaux
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// == Import components
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Home from '../Home'; // Page d'accueil
import Game from '../Game'; // Page des jeux
import Profile from '../Profile'; // Page de profil
import SignUp from '../SignUp'; // Page d'inscription
import SignIn from '../SignIn'; // Page de connexion
import MentionsL from '../MentionsL'; // Page des mentions légales
import Contact from '../Contact'; // Page de contact
import P404 from '../404'; // Page 404

// Point central de l'application
const App = () => {
  return (
    <div className="application">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mentionslegales" element={<MentionsL />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;