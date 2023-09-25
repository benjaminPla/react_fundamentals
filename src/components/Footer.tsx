import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light" data-testid="footer">
      <div className="container" data-testid="container">
        <div className="row" data-testid="row">
          <div className="col" data-testid="col">
            <p className="text-center" data-testid="text">
              &copy; {new Date().getFullYear()} React Fundamentals
            </p>
          </div>
        </div>
        <div className="row" data-testid="row">
          <div className="col" data-testid="col">
            <ul
              className="list-unstyled d-flex justify-content-center"
              data-testid="ul"
            >
              <li className="mx-3" data-testid="li">
                <a href="/">Home</a>
              </li>
              <li className="mx-3" data-testid="li">
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
