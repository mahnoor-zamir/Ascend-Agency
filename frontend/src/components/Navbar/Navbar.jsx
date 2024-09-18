import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <img 
        src="../public/logos/HighRollerHorizontal.PNG"
        alt="HighRoller Logo" 
        className="logo" 
        style={{ width: '300px', height: 'auto' }} // Adjust the width here
      />
      <button className="logout-button" onClick={onLogout}>LOG OUT</button>
    </nav>
  );
}

export default Navbar;
