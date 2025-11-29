import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contact & Location</h2>

      <form className="contact-form">

        <input type="text" placeholder="Name" className="contact-input" />

        <input type="email" placeholder="Email" className="contact-input" />

        <textarea placeholder="Message" className="contact-textarea" />

        <button type="submit" className="contact-btn">Send</button>
      </form>

      <div className="contact-map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.743476618523!2d-73.97301562393764!3d40.7812436713754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f62c29f3d%3A0x769d9a3bf0a1d57!2sCentral%20Park%20Zoo!5e0!3m2!1sen!2sus!4v1701477463000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>© Your Restaurant</p>
        <p>
          <strong>Hours:</strong> Mon–Thu 11–22 · Fri–Sat 11–24 · Sun 12–21
        </p>
      </footer>
    </div>
  );
}

export default Contact;
