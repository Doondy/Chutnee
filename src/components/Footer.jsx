import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left Section */}
        <div className="footer-left">
          © 2025 <span className="brand-name">ChutNee</span> | By{" "}
          <strong>Chandolu Doondy Sai Krishna</strong>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div>📞 +91-9854316777</div>
          <div>✉️ chutnee.support@gmail.com</div>
          <div>📍 Hyderabad, India</div>
        </div>
      </div>
    </footer>
  );
}