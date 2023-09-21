import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
