// == Imports globaux
import React from "react";

// == Import propre au component
import "./styles.css";

// == Import components
import Nav from "../Nav";

// Header du site
const Header = () => {
  return (
    <div className="header-container">
      <Nav />
    </div>
  );
};

export default Header;
