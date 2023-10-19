import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  items: {
    title: string;
    link: string;
  }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          {items.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
