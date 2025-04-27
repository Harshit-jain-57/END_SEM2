import React, { useState } from 'react';
import cart from '../assets/cart.png';
import logo from '../assets/logo.jpg';
import './NavBar.css';

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" id="logo" />

        {/* collapsed search pill */}
        <button
          className="search-btn"
          onClick={() => setIsSearchOpen(true)}
        >
          <span>Search ...</span>
        </button>

        <img src={cart} alt="cart" className="nav-icon" />
      </nav>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search ..."
              autoFocus
            />
            <button
              className="close-btn"
              onClick={() => setIsSearchOpen(false)}
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
