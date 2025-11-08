import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Don't show the Add Book button on the Add Book page
  const showAddButton = location.pathname !== '/add-book';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Library System
        </Link>
        
        <div className="nav-right">
          {showAddButton && (
            <Link to="/add-book" className="add-book-nav-button">
              + Add Book
            </Link>
          )}
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/browse" onClick={() => setIsOpen(false)}>Browse Books</Link></li>
        {showAddButton && (
          <li className="mobile-only">
            <Link to="/add-book" onClick={() => setIsOpen(false)}>Add Book</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
