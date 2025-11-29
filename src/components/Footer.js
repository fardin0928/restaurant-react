import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          Follow:
          <a href="#"> Facebook </a>·
          <a href="#"> Instagram </a>·
          <a href="#"> TikTok</a>
        </p>
      </div>

      <div className="footer-center">
        <p>
          <strong>Hours:</strong>
          Mon–Thu 11–22 · Fri–Sat 11–24 · Sun 12–21
        </p>
      </div>

      <div className="footer-right">
        <p>© Your Restaurant</p>
      </div>
    </footer>
  );
}

export default Footer;
