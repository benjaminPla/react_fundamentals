import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center">
              &copy; {new Date().getFullYear()} React Fundamentals
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-3">
                <a href="/">Home</a>
              </li>
              <li className="mx-3">
                <a href="https://www.benjaminpla.com" target="_blank">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
