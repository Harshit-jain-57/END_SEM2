import React from 'react';
import logo from '../assets/logo.jpg';
// if you have an SVG cart, import it as a ReactComponent for easy recolor:
import CartIcong from "../assets/cart-deepaqua.png"; 
import { menuData } from '../data/menuData';
import './NavBar.css';
const NavBar = () => {
  return (
  <nav className="navbar">
    {/* left: brand logo */}
    <img src={logo} alt="Brand logo" id="logo" />

    {/* center: saree categories */}
    <div className="nav-items">
      {Object.entries(menuData).map(([category, subcats]) => (
        <div key={category} className="nav-item">
          <button className="nav-link">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>

          {/* mega-dropdown */}
          <div className="dropdown-menu">
            {Object.entries(subcats).map(([subcat, items]) => (
              <div key={subcat} className="dropdown-section">
                <span className="dropdown-category">{subcat}</span>
                <div className="dropdown-items">
                  {items.map(item => (
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

    {/* right: cart icon */}
    <img src={CartIcong} className="nav-icon cart-icon"/>
  </nav>
)};

export default NavBar;
