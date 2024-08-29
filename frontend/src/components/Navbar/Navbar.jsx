// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/your-logo-url.png" alt="Ascend Agency Logo" className="logo" />
      <a href="#" className="logout">Log Out</a>
    </nav>
  );
}

export default Navbar;
