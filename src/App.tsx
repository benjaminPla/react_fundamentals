import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Menu from "./components/Menu";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";

const App: React.FC = () => {
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Cart", link: "/cart" },
    { title: "Checkout", link: "/checkout" },
  ];
  return (
    <React.StrictMode>
      <Menu items={menuItems} />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
