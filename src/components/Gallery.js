import React from "react";
import "./Gallery.css";

const images = [
  process.env.PUBLIC_URL + "/assets/wings.jpg",
  process.env.PUBLIC_URL + "/assets/chicken-sandwich.webp",
  process.env.PUBLIC_URL + "/assets/burger.webp",
  process.env.PUBLIC_URL + "/assets/fries.jpg",
  process.env.PUBLIC_URL + "/assets/salad.jpg",
  process.env.PUBLIC_URL + "/assets/shake.jpg"
];

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Image Gallery</h2>
      <p className="gallery-subtitle">Swipe or scroll to explore our best dishes.</p>

      <div className="slider-container">
        <div className="slider">
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`food-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className="dot"></span>
        ))}
      </div>

      {/* FOOTER  */}
      <footer className="footer-gallery">
        <p>© Your Restaurant</p>
        <p>
          <strong>Hours:</strong> Mon–Thu 11–22 · Fri–Sat 11–24 · Sun 12–21
        </p>
      </footer>
    </div>
  );
}

export default Gallery;
