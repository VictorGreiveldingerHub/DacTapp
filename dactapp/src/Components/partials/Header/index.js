// == Imports globaux
import React from "react";
import PropTypes from "prop-types";

// == Import propre au component
import "./styles.css";

// == Import components
import Nav from "../Nav";

// Header du site
const Header = ({ darkModeToggle }) => {
  return (
    <div className="header-container">
      <Nav />
      <button onClick={darkModeToggle}>Changer le theme</button>
    </div>
  );
};

Header.propTypes = {
  darkModeToggle: PropTypes.func,
};

export default Header;
