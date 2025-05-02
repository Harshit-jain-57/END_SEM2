import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import CartIcong from '../assets/cart-deepaqua.png';
import { menuData } from '../data/menuData';
import './NavBar.css';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState(null);

  const toggleExpand = (cat) =>
    setExpandedCat(expandedCat === cat ? null : cat);

  return (
    <>
      <nav className="navbar">
        {/* left: brand logo */}
        <img src={logo} alt="Brand logo" id="logo" />

        {/* desktop nav-items */}
        <div className="nav-items desktop-only">
          {Object.entries(menuData).map(([category, subcats]) => (
            <div key={category} className="nav-item">
              <button className="nav-link">
                {category[0].toUpperCase() + category.slice(1)}
              </button>
              <div className="dropdown-menu">
                {Object.entries(subcats).map(([subcat, items]) => (
                  <div key={subcat} className="dropdown-section">
                    <span className="dropdown-category">{subcat}</span>
                    <div className="dropdown-items">
                      {items.map((item) => (
                        <a key={item} href="#" className="dropdown-item">
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

        {/* cart icon */}
        <img
          src={CartIcong}
          className="nav-icon cart-icon desktop-only"
          alt="Cart"
        />

        {/* mobile hamburger */}
        <button
          className={`mobile-menu-button mobile-only ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger" />
        </button>
      </nav>

      {/* overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => {
          setMobileOpen(false);
          setExpandedCat(null);
        }}
      />

      {/* side drawer */}
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <header className="drawer-header">
          <img src={logo} alt="Brand logo" />
          <button
            onClick={() => {
              setMobileOpen(false);
              setExpandedCat(null);
            }}
            className="close-btn"
            aria-label="Close menu"
          >
            ×
          </button>
        </header>
        <ul className="mobile-menu-list">
          {Object.keys(menuData).map((category) => (
            <li key={category}>
              <button
                className="mobile-menu-item"
                onClick={() => toggleExpand(category)}
              >
                {category.toUpperCase()}
                <span
                  className={`arrow ${
                    expandedCat === category ? 'expanded' : ''
                  }`}
                />
              </button>
              <div className={`mobile-subcats ${expandedCat === category ? 'expanded' : ''}`}>
                {Object.entries(menuData[category]).map(
                  ([subcat, items]) => (
                    <div key={subcat} className="subcat-group">
                      <div className="subcat-title">{subcat}</div>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default NavBar;
