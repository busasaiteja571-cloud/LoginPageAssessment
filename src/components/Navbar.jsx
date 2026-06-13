import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="simple-navbar">
      <div className="nav-logo">
        <Link to="/">🏠 Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;