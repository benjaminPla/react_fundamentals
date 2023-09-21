import React from "react";

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
              <a className="nav-link" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
