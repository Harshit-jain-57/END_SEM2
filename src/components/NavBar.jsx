import React, { useState, useEffect, useRef } from 'react';
import cart from '../assets/cart.png';
import logo from '../assets/logo.jpg';
import { menuData } from '../data/menuData';
import './NavBar.css';

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
      if (e.key === '/' && !isSearchOpen) {
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" id="logo" />

        {/* Saree Type Links with Dropdowns */}
        <div className="nav-items">
          {Object.entries(menuData).map(([category, subcategories]) => (
            <div key={category} className="nav-item">
              <button className="nav-link">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
              <div className="dropdown-menu">
                {Object.entries(subcategories).map(([subcategory, items]) => (
                  <div key={subcategory} className="dropdown-section">
                    <span className="dropdown-category">{subcategory}</span>
                    <div className="dropdown-items">
                      {items.map((item, index) => (
                        <a key={index} href="#" className="dropdown-item">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Search Button */}
        <button
          className="search-btn"
          onClick={() => setIsSearchOpen(true)}
        >
          <span>Search docs</span>
          <kbd>/</kbd>
        </button>

        <img src={cart} alt="cart" className="nav-icon" />
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search the docs..."
              autoFocus
            />
            <button
              className="close-btn"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
