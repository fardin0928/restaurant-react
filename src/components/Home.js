import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="home-content">
        <div className="text-section">
          <p className="subheading">Fast Food Restaurant</p>
          <h1 className="title">Tasty Burgers, Crispy Fries.</h1>
          <p className="description">
            Simple, student-friendly prices. Open late near campus.
          </p>

          <Link to="/menu">
            <button className="menu-btn">See Menu</button>
          </Link>
        </div>

        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop"
            alt="Burger"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>Follow us:</p>

        <div className="footer-buttons">
          <button className="footer-btn">Facebook</button>
          <button className="footer-btn">Instagram</button>
          <button className="footer-btn">TikTok</button>
        </div>

        <p className="hours">
          Hours: Mon–Thu 11–22 · Fri–Sat 11–24 · Sun 12–21
        </p>
      </footer>
    </div>
  );
}

export default Home;
