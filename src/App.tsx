import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { menuItems } from "./utils/menuItems";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Menu items={menuItems} />
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
