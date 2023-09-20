import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} React Fundamentals</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
