// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <img src="/your-logo-url.png" alt="Ascend Agency Logo" className="logo" />
      <button className="logout-button" onClick={onLogout}>LOG OUT</button>
    </nav>
  );
}

export default Navbar;
