import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ onCartOpen, cartCount }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const showCart = location.pathname === "/menu";

  return (
    <header className="header">
      <h1 className="logo">Your Restaurant</h1>

      <div className="nav-wrapper">
        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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
