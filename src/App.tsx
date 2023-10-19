import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import router from "./router";
import { menuItems } from "./utils/menuItems";
import Menu from "./components/Menu";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Message from "./components/Message";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Menu items={menuItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Message />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
