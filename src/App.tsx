import React from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";

const App: React.FC = () => {
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Cart", link: "/cart" },
    { title: "Checkout", link: "/checkout" },
  ];
  return (
    <>
      <Menu items={menuItems} />
      <Title text="React Fundamentals" />
    </>
  );
};

export default App;
