import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Library System
      </Link>
      
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/browse" className="nav-link">
          Browse Books
        </Link>
        <Link to="/add-book" className="nav-link">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
