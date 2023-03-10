// == Imports globaux
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// == Import propre au component
import "./styles.css";

// == Import components
import Header from "../partials/Header"; // Comprend la navigation du site
import Footer from "../partials/Footer"; // Comprend les liens disponibles sur toutes les pages
import Home from "../Home"; // Page d'accueil
import Game from "../Game"; // Page des jeux
import Profile from "../Profile"; // Page de profil
import Dashboard from "../Dashboard"; // Page tableau de bord
import SignUp from "../SignUp"; // Page d'inscription
import SignIn from "../SignIn"; // Page de connexion
import MentionsL from "../MentionsL"; // Page des mentions légales
import Contact from "../Contact"; // Page de contact
import FAQ from "../FAQ"; // Page FAQ
import P404 from "../404"; // Page 404

// Point central de l'application
const App = () => {
  // Dark mode
  const [theme, setTheme] = useState("light");
  const [lowVision, setLowVision] = useState("normal");

  // Change le theme du site
  const darkModeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const lowVisionTheme = () => {
    if (lowVision === "normal") {
      setLowVision("low");
    } else {
      setLowVision("normal");
    }
  };

  useEffect(() => {
    document.body.className = theme;
    document.body.className = lowVision;
  }, [theme, lowVision]);

  return (
    <div className={`application-${theme}-${lowVision}`}>
      <Header darkModeToggle={darkModeToggle} />
      <button onClick={lowVisionTheme}>LOW</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mentions-legales" element={<MentionsL />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
