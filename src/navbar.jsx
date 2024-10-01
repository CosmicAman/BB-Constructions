import React, { useState } from 'react';
import './nav-bar.css'; // Import a separate CSS file for styling

const Navbar = ({ setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">BB Constructions</h2>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
        <li onClick={() => handleMenuClick('home')}>Home</li>
        <li onClick={() => handleMenuClick('projects')}>Projects</li>
        <li onClick={() => handleMenuClick('about')}>About</li>
        <li onClick={() => handleMenuClick('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
