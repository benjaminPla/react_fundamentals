import React from "react";
import "./Menu.css";

interface MenuProps {
  items: {
    title: string;
    link: string;
  };
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
