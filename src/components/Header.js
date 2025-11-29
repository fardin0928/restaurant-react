import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ onCartOpen, cartCount }) => {
  const location = useLocation();

  // Only show cart on the menu page
  const showCart = location.pathname === "/menu";

  return (
    <header className="header">
      <h1 className="logo">Your Restaurant</h1>

      <div className="nav-wrapper">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {showCart && (
          <button className="cart-btn" onClick={onCartOpen}>
            🛒 Cart ({cartCount})
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
