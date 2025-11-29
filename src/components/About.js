import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">Our Story</h2>

      <p className="about-text">
        Started as a food truck in 2015, now serving the neighborhood with
        smash-seared burgers and house-cut fries.
      </p>

      <div className="about-cards">
        
        <div className="about-card">
          <h3>Specials</h3>
          <ul>
            <li>Double Smash</li>
            <li>Truffle Parm Fries</li>
            <li>Hot Honey Chicken</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Mission</h3>
          <p>
            Quality ingredients, quick service, student prices.
          </p>
        </div>

        <div className="about-card">
          <h3>Values</h3>
          <p>
            Local suppliers, friendly vibes, consistent taste.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>© Your Restaurant</p>
        <p>
          <strong>Hours:</strong> Mon–Thu 11–22 · Fri–Sat 11–24 · Sun 12–21
        </p>
      </footer>
    </div>
  );
}

export default About;
